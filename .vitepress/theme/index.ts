// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useRoute } from 'vitepress';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import AGWHomeContents from './components/AGWHomeContents.vue'


import './style.css'
import './custom.css'
import 'viewerjs/dist/viewer.min.css';
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(AGWHomeContents),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.provide(InjectionKey, {
      locales: {
        'ru-RU': {
          layoutSwitch: {
            title: 'Измените внешний вид страницы',
            titleHelpMessage: 'Измените стиль оформления ALT Gnome Wiki, выбирите максимально удобный вариант зависмости от размера вашего экрана и типа устройства.',
            optionFullWidth: 'Полноэкранный',
            optionFullWidthAriaLabel: 'Полноэкранный',
            optionFullWidthHelpMessage: 'Боковая панель и область содержимого занимают всю ширину экрана.',
            optionSidebarWidthAdjustableOnly: 'Боковая панель с пользовательской настройкой',
            optionSidebarWidthAdjustableOnlyAriaLabel: 'Боковая панель с пользовательской настройкой',
            optionSidebarWidthAdjustableOnlyHelpMessage: 'Увеличьте ширину боковой панели, максимальная ширина боковой панели может изменяться, но ширина области содержимого останется прежней.',
            optionBothWidthAdjustable: 'Полноэрканный с пользовательской настройкой',
            optionBothWidthAdjustableAriaLabel: 'Полноэрканный с пользовательской настройкой',
            optionBothWidthAdjustableHelpMessage: 'Управляется шириной боковой панели, и шириной содержания документа. Настройте желаемую ширину максимальной ширины боковой панели и содержимого документа.',
            optionOriginalWidth: 'Оригинальная ширина',
            optionOriginalWidthAriaLabel: 'Оригинальная ширина',
            optionOriginalWidthHelpMessage: 'Оригинальная ширина размера страницы, предусмотренная разработчиками VitePress',
            pageLayoutMaxWidth: {
              title: 'Измените максимальную ширину страницы',
              titleAriaLabel: 'Измените максимальную ширину страницы',
              titleHelpMessage: 'Отрегулируйте точное значение ширины страницы ALT Gnome Wiki, чтобы адаптироваться к различным потребностям чтения и экранам.',
              titleScreenNavWarningMessage: 'Максимальная ширина макета страницы недоступна на экране мобильного устройства.',
              slider: 'Отрегулируйте максимальную ширину страницы',
              sliderAriaLabel: 'Отрегулируйте максимальную ширину страницы',
              sliderHelpMessage: 'Расположенный ползунок, позволяющий пользователю выбирать и настраивать желаемую ширину страницы, может быть изменен в зависимости от размера вашего экрана.',
            },
            contentLayoutMaxWidth: {
              title: 'Измените максимальную ширину содержания',
              titleAriaLabel: 'Измените максимальную ширину содержания',
              titleHelpMessage: 'Отрегулируйте точное значение ширины содержимого документа в макете ALT Gnome Wiki, чтобы адаптироваться к различным потребностям чтения и экранам.',
              titleScreenNavWarningMessage: 'Максимальная ширина макета содержимого недоступна на экране мобильного устройства.',
              slider: 'Отрегулируйте максимальную ширину содержимого',
              sliderAriaLabel: 'Отрегулируйте максимальную ширину содержимого',
              sliderHelpMessage: 'Расположенный ползунок, позволит пользователю выбирать и настраить желаемую ширину содержимого, может быть изменен в зависимости от размера вашего экрана.',
            }
          },
          spotlight: {
            title: 'Фокус',
            titleAriaLabel: 'Фокус',
            titleHelpMessage: 'Выделите строку, на которой в данный момент находится курсор мыши, в содержимом, для удобства пользователей, у которых могут возникнуть трудности с чтением и фокусировкой.',
            titleScreenNavWarningMessage: 'Фокус недоступен на экране мобильного устройства.',
            optionOn: 'Включить',
            optionOnAriaLabel: 'Включить',
            optionOnHelpMessage: 'Включите фокус.',
            optionOff: 'Выключить',
            optionOffAriaLabel: 'Выключить',
            optionOffHelpMessage: 'Выключите фокус.',
          }
        } 
      } 
    } as Options)
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route);
  }
} satisfies Theme
