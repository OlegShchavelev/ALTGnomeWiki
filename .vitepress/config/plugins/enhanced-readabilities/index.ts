export const nolebaseEnhancedReadabilitiesOptions = {
  locales: {
    'ru-RU': {
      title: {
        title: 'Повышенная читаемость',
        titleAriaLabel: 'Повышенная читаемость'
      },
      layoutSwitch: {
        title: 'Макета страницы',
        titleHelpMessage:
          'Измените стиль оформления ALT Gnome Wiki, выберите максимально удобный вариант в зависимости от размера вашего экрана и типа устройства.',
        titleScreenNavWarningMessage: 'Изменение макета страницы недоступено на экранах мобильных устройств',
        optionFullWidth: 'Развёрнутый',
        optionFullWidthAriaLabel: 'Развёрнутый',
        optionFullWidthHelpMessage: 'Страница и область содержимого занимают всю ширину экрана.',
        optionSidebarWidthAdjustableOnly: 'Настраиваемая ширина страницы',
        optionSidebarWidthAdjustableOnlyAriaLabel: 'Настраиваемая ширина страницы',
        optionSidebarWidthAdjustableOnlyHelpMessage:
          'Управление максимальную шириной страницы, область содержимого будет зафиксирована.',
        optionBothWidthAdjustable: 'Полностью настраиваемый',
        optionBothWidthAdjustableAriaLabel: 'Полностью настраиваемый',
        optionBothWidthAdjustableHelpMessage: 'Управление максимальной шириной страницы и содержимого.',
        optionOriginalWidth: 'Оригинальная ширина',
        optionOriginalWidthAriaLabel: 'Оригинальная ширина',
        optionOriginalWidthHelpMessage: 'Ширина страницы, предусмотренная разработчиками VitePress.',
        pageLayoutMaxWidth: {
          title: 'Максимальная ширина страницы',
          titleAriaLabel: 'Максимальная ширина страницы',
          titleHelpMessage:
            'Точное значение ширины страницы можно настроить для различных экранов и адаптировать условиям чтения.',
          titleScreenNavWarningMessage:
            'Изменение максимальной ширины страницы недоступно на экранах мобильных устройств.',
          slider: 'Регулеровка максимальной ширины страницы',
          sliderAriaLabel: 'Регулеровка максимальной ширины страницы',
          sliderHelpMessage:
            'Ползунок, позволяющий настроить максимальную ширину страницы. Может быть изменён в зависимости от размера экрана.'
        },
        contentLayoutMaxWidth: {
          title: 'Максимальная ширина содержимого',
          titleAriaLabel: 'Максимальная ширина содержимого',
          titleHelpMessage:
            'Точное значение ширины содержимого можно настроить для различных экранов и адаптировать условиям чтения.',
          titleScreenNavWarningMessage:
            'Изменение максимальной ширины содержимого недоступно на экранах мобильных устройств.',
          slider: 'Регулеровка максимальной ширины содержимого',
          sliderAriaLabel: 'Регулеровка максимальной ширины содержимого',
          sliderHelpMessage:
            'Ползунок, позволяющий настроить максимальную ширину содержимого. Может быть изменён в зависимости от размера экрана.'
        }
      },
      spotlight: {
        title: 'Подсветка',
        titleAriaLabel: 'Подсветка',
        titleHelpMessage: 'Выделите блок содержимого, на котором находится курсор.',
        titleScreenNavWarningMessage: 'Подсветка недоступна на экране мобильного устройства.',
        optionOn: 'Включить',
        optionOnAriaLabel: 'Включить',
        optionOnHelpMessage: 'Включите подсветку.',
        optionOff: 'Выключить',
        optionOffAriaLabel: 'Выключить',
        optionOffHelpMessage: 'Выключите подсветку.',
        styles: {
          title: 'Стиль подсветки',
          titleHelpMessage: 'Измените стиль выделения',
          optionUnder: 'Под блоком',
          optionUnderAriaLabel: 'Под блоком',
          optionUnderHelpMessage: 'Добавляет сплошную заливку блока под курсором.',
          optionAside: 'Сбоку от блока',
          optionAsideAriaLabel: 'Сбоку от блока',
          optionAsideHelpMessage: 'Добавляет фиксированную сплошную линию рядом с блоком под курсором'
        }
      }
    }
  }
}
