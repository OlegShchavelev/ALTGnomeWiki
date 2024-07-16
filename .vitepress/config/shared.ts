/* System */
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { telegram, vk } from '../icons'
import { rewrites } from '../paths'

/* Config */
import * as config from '../config.json'

/* Tools */

import vueDevTools from 'vite-plugin-vue-devtools'

/* Markdown */
import VitepressMarkdownTimeline from 'vitepress-markdown-timeline'
import markdownItKbd from 'markdown-it-kbd'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
import markdownItEmbed from 'markdown-it-html5-embed'
import markdownItConditionalRender from 'markdown-it-conditional-render'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

/* Syntaxises */
import languages from '../theme/syntaxes'

/* GitLog */
import UnoCSS from 'unocss/vite'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

import { default as createContainer } from '../theme/composables/customContainers'


/* PagePropierties */
import {
    PageProperties,
    PagePropertiesMarkdownSection
} from '@nolebase/vitepress-plugin-page-properties/vite'


export const shared = defineConfig({
    title: 'ALT Gnome Wiki',
    titleTemplate: ':title — ALT Gnome Wiki',
    base: '/ALTGnomeWiki/',
    srcDir: './docs',
    sitemap: {
        hostname: 'https://alt-gnome.wiki/'
    },
    vite: {
        plugins: [
            vueDevTools(),
            UnoCSS(),
            GitChangelog({
                maxGitLogCount: config.nolebase_gitlog_maxCommits,
                repoURL: config.nolebase_gitlog_repo
            }),
            GitChangelogMarkdownSection({
                sections: config.nolebase_gitlog_enabled
            }),
            PageProperties(),
            PagePropertiesMarkdownSection({
                excludes: [],
                exclude: (_, { helpers }): boolean => {
                    for (let page of config.nolebase_exclude) {
                        if (helpers.idEndsWith(page)) return true
                    }
                    return false
                }
            })
        ],
        optimizeDeps: {
            exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
        },
        ssr: {
            noExternal: [
                '@nolebase/vitepress-plugin-enhanced-readabilities',
                '@nolebase/vitepress-plugin-page-properties'
            ]
        },
        resolve: {
            alias: {
                '@vitepress/theme': fileURLToPath(
                    new URL('../node_modules/vitepress/dist/client/theme-default', import.meta.url)
                )
            }
        }
    },
    themeConfig: {
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: 'Поиск',
                                buttonAriaLabel: 'Поиск'
                            },
                            modal: {
                                noResultsText: 'Нет результатов по запросу',
                                resetButtonTitle: 'Сбросить',
                                footer: {
                                    selectText: 'для выбора',
                                    navigateText: 'для навигации',
                                    closeText: 'закрыть'
                                }
                            }
                        }
                    }
                }
            }
        },
        logo: { src: '/logo.png', width: 36, height: 36, alt: config.title },
        socialLinks: [
            {
                icon: {
                    svg: telegram
                },
                link: 'https://t.me/alt_gnome'
            },
            {
                icon: {
                    svg: vk
                },
                link: 'https://vk.com/alt_gnome'
            },
            {
                icon: 'github',
                link: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki'
            }
        ],
        editLink: {
            pattern: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki/edit/main/docs/:path',
        },
        outline: {
            level: [2, 3]
        },
    },
    rewrites: rewrites,
    markdown: {
        languages,
        container: {
            tipLabel: 'TIPS',
            warningLabel: 'WARNING',
            dangerLabel: 'CAUTION',
            infoLabel: 'NOTE',
            detailsLabel: 'DETAILS'
        },
        config: (md) => {
            for (const [name, opts] of config.alignment_containers) {
                md.use(...createContainer(name, opts, md))
            }
            md.use(markdownItKbd)
            md.use(markdownItTaskLists)
            md.use(VitepressMarkdownTimeline)
            md.use(markdownItImplicitFigures, {
                figcaption: 'title',
                copyAttrs: '^class$'
            })
            md.use(markdownItEmbed, {
                html5embed: {
                    useImageSyntax: true // Enables video/audio embed with ![]() syntax (default)
                }
            })
            md.use(markdownItConditionalRender)
            md.use(tabsMarkdownPlugin)
        }
    }
})
