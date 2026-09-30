// First-touch attribution: stores where a visitor first arrived from (UTM
// params, external referrer, landing page, gclid) in a cookie shared across
// *.docmost.com.

const COOKIE_NAME = 'dm_ft';
const MAX_AGE_SECONDS = 180 * 24 * 60 * 60;
const MAX_VALUE_LENGTH = 200;
const IGNORED_REFERRER_HOSTS = ['checkout.stripe.com', 'accounts.google.com'];

interface FirstTouch {
  s?: string;
  m?: string;
  c?: string;
  t?: string;
  n?: string;
  r?: string;
  l?: string;
  g?: string;
  ts: number;
}

function clip(value: string | null): string | undefined {
  return value ? value.slice(0, MAX_VALUE_LENGTH) : undefined;
}

function isDocmostHost(host: string): boolean {
  return host === 'docmost.com' || host.endsWith('.docmost.com');
}

function externalReferrer(): string | undefined {
  if (!document.referrer) return undefined;
  try {
    const url = new URL(document.referrer);
    if (
      isDocmostHost(url.hostname) ||
      url.hostname === window.location.hostname ||
      IGNORED_REFERRER_HOSTS.includes(url.hostname)
    ) {
      return undefined;
    }
    return clip(url.origin + url.pathname);
  } catch {
    return undefined;
  }
}

function readFirstTouch(): FirstTouch | null {
  const prefix = `${COOKIE_NAME}=`;
  const entry = document.cookie.split('; ').find((c) => c.startsWith(prefix));
  if (!entry) return null;
  try {
    return JSON.parse(decodeURIComponent(entry.slice(prefix.length)));
  } catch {
    return null;
  }
}

function isDirect(touch: FirstTouch): boolean {
  return !touch.s && !touch.r && !touch.g;
}

export function recordFirstTouch(options: { skipPaths?: string[] } = {}): void {
  try {
    const { pathname, search, hostname, protocol } = window.location;
    if (options.skipPaths?.some((p) => pathname.startsWith(p))) return;

    const params = new URLSearchParams(search);
    const current: FirstTouch = {
      s: clip(params.get('utm_source')),
      m: clip(params.get('utm_medium')),
      c: clip(params.get('utm_campaign')),
      t: clip(params.get('utm_term')),
      n: clip(params.get('utm_content')),
      r: externalReferrer(),
      l: clip(pathname + search),
      g: clip(params.get('gclid')),
      ts: Math.floor(Date.now() / 1000),
    };

    const existing = readFirstTouch();
    // Keep the first real touch; only a stored "direct" visit gets replaced
    if (existing && (!isDirect(existing) || isDirect(current))) return;

    const domain = isDocmostHost(hostname) ? '; Domain=.docmost.com' : '';
    const secure = protocol === 'https:' ? '; Secure' : '';
    document.cookie =
      `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(current))}` +
      `; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${domain}${secure}`;
  } catch {
    // Attribution must never break the page
  }
}
