export const pagePropertiesMD = {
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

export const pagePropertiesLocales = {
  'ru-RU': {
    wordsCount: '{{wordsCount}}   слов'
  }
}
