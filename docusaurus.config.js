// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Hello Web3',
    tagline: 'Omaeno',
    url: 'https://omaeno.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'thurendous', // Usually your GitHub org/user name.
    projectName: 'Omaeno-website', // Usually your repo name.
    trailingSlash: false,

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja', 'en' /*'zh-Hans'*/],
    },
    plugins: [
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-1RJPDZD7CN',
                anonymizeIP: true,
            },
        ],
        require.resolve('@cmfcmf/docusaurus-search-local'),
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/thurendous/Omaeno-website/tree/master/',
                },
                blog: {
                    showReadingTime: true, // When set to false, the "x min read" won't be shown
                    readingTime: ({
                        content,
                        frontMatter,
                        defaultReadingTime,
                    }) =>
                        defaultReadingTime({
                            content,
                            options: { wordsPerMinute: 500 },
                        }),
                    blogSidebarCount: 10,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            prism: {
                theme: require('prism-react-renderer/themes/github'),
                additionalLanguages: ['solidity'],
                darkTheme: require('prism-react-renderer/themes/dracula'),
                respectPrefersColorScheme: true,
            },
            metadata: [
                {
                    name: 'Omaeno Web3',
                    content: 'programming, Solidity, Web3, NFT, blockchain',
                },
            ],
            // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
            announcementBar: {
                id: 'support_us',
                content:
                    'The website is still a work in progress. Please feel free to give our <a target="_blank" rel="noopener noreferrer" href="https://github.com/thurendous/Omaeno-website">github</a> a star or follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Markwu_crypto">twitter</a>!',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: true,
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'Omaeno Logo',
                    src: 'img/logo.png',
                },
                items: [
                    { to: '/blog', label: 'Knowledge', position: 'left' },
                    // {
                    //     type: 'doc',
                    //     docId: 'Learning/helloWorld',
                    //     position: 'left',
                    //     label: 'Solidity',
                    // },
                    {
                        to: '/docs/category/solidity-basics',
                        label: 'Solidity',
                        position: 'left',
                    },
                    {
                        to: '/docs/category/ethersjs',
                        label: 'Ethers.js',
                        position: 'left',
                    },
                    {
                        to: '/unitConverter',
                        label: 'Unit Converter',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/thurendous/Omaeno-website',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Learn',
                        items: [
                            {
                                label: 'Knowledge',
                                to: '/blog',
                            },
                            {
                                label: 'Solidity',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/DJ9FrhWPDb',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/Markwu_crypto',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // {
                            //     label: 'Blog',
                            //     to: '/blog',
                            // },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/thurendous/Omaeno-website',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Omaeno is built with love in Tokyo.`,
            },
            // prism: {
            //     theme: lightCodeTheme,
            //     darkTheme: darkCodeTheme,
            //     respectPrefersColorScheme: true,
            // },
        }),
}

module.exports = config
