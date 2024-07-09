// Гитлог
export const GitLocales = {
    'ru-RU': {
        changelog: {
          title: 'История изменений',
          noData: 'Нет изменений',
          lastEdited: 'Последнее редактирование: {{daysAgo}}',
          lastEditedDateFnsLocaleName: 'ru',
          viewFullHistory: 'Показать историю',
          committedOn: ' от {{date}}'
        },
        contributors: {
          title: 'Авторы',
          noData: 'Нет информации'
        }
    }
}

// Улучшение читабельности
export const ERlocales = {
    'ru-RU': {
      title: {
        title: 'Повышенная читаемость'
      },
      layoutSwitch: {
        title: 'Измените внешний вид страницы',
        titleHelpMessage:
          'Измените стиль оформления ALT Gnome Wiki, выбирите максимально удобный вариант зависмости от размера вашего экрана и типа устройства.',
        optionFullWidth: 'Полноэкранный',
        optionFullWidthAriaLabel: 'Полноэкранный',
        titleScreenNavWarningMessage:
          'Изменить внешний вид страницы недоступен на экране мобильного устройства',
        optionFullWidthHelpMessage: 'Боковая панель и область содержимого занимают всю ширину экрана.',
        optionSidebarWidthAdjustableOnly: 'Боковая панель с пользовательской настройкой',
        optionSidebarWidthAdjustableOnlyAriaLabel: 'Боковая панель с пользовательской настройкой',
        optionSidebarWidthAdjustableOnlyHelpMessage:
          'Увеличьте ширину боковой панели, максимальная ширина боковой панели может изменяться, но ширина области содержимого останется прежней.',
        optionBothWidthAdjustable: 'Полноэрканный с пользовательской настройкой',
        optionBothWidthAdjustableAriaLabel: 'Полноэрканный с пользовательской настройкой',
        optionBothWidthAdjustableHelpMessage:
          'Управляется шириной боковой панели, и шириной содержания документа. Настройте желаемую ширину максимальной ширины боковой панели и содержимого документа.',
        optionOriginalWidth: 'Оригинальная ширина',
        optionOriginalWidthAriaLabel: 'Оригинальная ширина',
        optionOriginalWidthHelpMessage:
          'Оригинальная ширина размера страницы, предусмотренная разработчиками VitePress',
        pageLayoutMaxWidth: {
          title: 'Измените максимальную ширину страницы',
          titleAriaLabel: 'Измените максимальную ширину страницы',
          titleHelpMessage:
            'Отрегулируйте точное значение ширины страницы ALT Gnome Wiki, чтобы адаптироваться к различным потребностям чтения и экранам.',
          titleScreenNavWarningMessage:
            'Максимальная ширина макета страницы недоступна на экране мобильного устройства.',
          slider: 'Отрегулируйте максимальную ширину страницы',
          sliderAriaLabel: 'Отрегулируйте максимальную ширину страницы',
          sliderHelpMessage:
            'Расположенный ползунок, позволяющий пользователю выбирать и настраивать желаемую ширину страницы, может быть изменен в зависимости от размера вашего экрана.'
        },
        contentLayoutMaxWidth: {
          title: 'Измените максимальную ширину содержания',
          titleAriaLabel: 'Измените максимальную ширину содержания',
          titleHelpMessage:
            'Отрегулируйте точное значение ширины содержимого документа в макете ALT Gnome Wiki, чтобы адаптироваться к различным потребностям чтения и экранам.',
          titleScreenNavWarningMessage:
            'Максимальная ширина макета содержимого недоступна на экране мобильного устройства.',
          slider: 'Отрегулируйте максимальную ширину содержимого',
          sliderAriaLabel: 'Отрегулируйте максимальную ширину содержимого',
          sliderHelpMessage:
            'Расположенный ползунок, позволит пользователю выбирать и настраить желаемую ширину содержимого, может быть изменен в зависимости от размера вашего экрана.'
        }
      },
      spotlight: {
        title: 'Фокус',
        titleAriaLabel: 'Фокус',
        titleHelpMessage:
          'Выделите строку, на которой в данный момент находится курсор мыши, в содержимом, для удобства пользователей, у которых могут возникнуть трудности с чтением и фокусировкой.',
        titleScreenNavWarningMessage: 'Фокус недоступен на экране мобильного устройства.',
        optionOn: 'Включить',
        optionOnAriaLabel: 'Включить',
        optionOnHelpMessage: 'Включите фокус.',
        optionOff: 'Выключить',
        optionOffAriaLabel: 'Выключить',
        optionOffHelpMessage: 'Выключите фокус.',
        styles: {
          title: 'Стиль фокуса',
          titleHelpMessage: 'Измените стиль фокуса(подсветки)',
          optionUnder: 'Under',
          optionUnderAriaLabel: 'Under',
          optionUnderHelpMessage:
            'Добавьте сплошной цвет фона под зависающим элементом, чтобы выделить место, где в данный момент находится курсор',
          optionAside: 'Aside',
          optionAsideAriaLabel: 'Aside',
          optionAsideHelpMessage:
            'Добавьте фиксированную линию сплошным цветом в сторону элемента наведения курсора, чтобы выделить место, где в данный момент находится курсор'
        }
      }
    }
  }

// Расширеные свойства страницы

export const PPMarkdown = {
    'ru-RU': [
      {
        key: 'tags',
        type: 'tags',
        title: 'Теги'
      },
      {
        key: 'progress',
        type: 'progress',
        title: 'Прогресс'
      },
      {
        key: 'createdAt',
        type: 'datetime',
        title: 'Создано',
        formatAsFrom: true,
        dateFnsLocaleName: 'ru'
      },
      {
        key: 'updatedAt',
        type: 'datetime',
        title: 'Обновлено',
        formatAsFrom: true,
        dateFnsLocaleName: 'ru'
      }
      /*
          {
            key: 'wordsCount',
            type: 'dynamic',
            title: 'Количество слов',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: 'Время чтения',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'ru',
            },
          },
          */
    ]
  }
  
  export const PPLocales = {
    'ru-RU': {
      wordsCount: '{{wordsCount}}   слов'
    }
  }
  