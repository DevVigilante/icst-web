const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const config = {
    title: 'Innovative Creations of Software Technology',
    tagline: 'Open source projects',
    url: 'https://github.com/Innovative-CST',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icst.jpeg',
    organizationName: 'Innovative Creations of Software Technology',
    projectName: 'ICST',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            ({
                docs: false, // Disable default docs setup
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/SyntaxGalaxy/icst-web/tree/dev/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'ace_docs',
                path: 'docs-ace',
                routeBasePath: 'docs-ace',
                sidebarPath: require.resolve('./ace-sidebar.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'aas_docs',
                path: 'docs-aas',
                routeBasePath: 'docs-aas',
                sidebarPath: require.resolve('./aas-sidebar.js'),
            },
        ],
    ],
    themeConfig: {
        navbar: {
            title: 'Innovative Creations of Software Technology',
            logo: {
                alt: 'Logo',
                src: 'img/icst.jpeg',
            },
            items: [
                { to: '/docs-aas/Introduction', label: 'Android AppStudio Docs', position: 'left' },
                { to: '/docs-ace/Introduction', label: 'Android Code Editor Docs', position: 'left' },
                {
                    label: 'GitHub',
                    position: 'right',
                    href: 'https://github.com/Innovative-CST/',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        { label: 'Android AppStudio Docs', to: '/docs-aas/Introduction' },
                        { label: 'Android Code Editor Docs', to: '/docs-ace/Introduction' },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ICST, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
        },
    },
};

module.exports = config;
