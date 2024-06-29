import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Docmost - Documentation",
  tagline: "Open source collaborative wiki and documentation software",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docmost.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "docmost", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/docmost/docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/docmost/docs/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-15RC5C8G8H",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: "",
    navbar: {
      title: "Docmost",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Website",
          href: "https://docmost.com",
        },
        {
          href: "https://github.com/docmost/docmost",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      appId: "1YNLNIMGT9",
      apiKey: "83977ee76ec0f9158a9f7805abd8ddb2",
      indexName: "most",
      contextualSearch: true,
      replaceSearchResultPathname: {
        from: "/docs/",
        to: "/",
      },
      searchParameters: {},
      searchPagePath: "search",
    },
    /*
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Intro',
                  to: '/intro',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/docmostHQ',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/docmost/docmost',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Docmost. Built with Docusaurus.`,
        },
         */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
