const homeSorting = 'month, commits'
const teamSorting = 'role, commits, month'
const leader = 'Олег Щавелев'
const limit = 6
const developersSection = {
  title: 'Разработчики',
  description:
    'Люди, которые активно участвуют не только в расширении базы знаний, но и в улучшении её функционала.'
}
const membersSection = {
  title: 'Авторы',
  description: 'Люди, которые участвуют в улучшении и создании новых статей.'
}

export { homeSorting, teamSorting, leader, limit, membersSection, developersSection }

/* Информация об участниках */

export const contributions = [
  {
    avatar: 'https://github.com/OlegShchavelev.png',
    name: 'Олег Щавелев',
    mapByNameAliases: ['OlegShchavelev', 'Oleg Shchavelev', 'Олег Щавелев'],
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/OlegShchavelev' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/1uEC4uodPuV'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/44705058?v=4',
    name: 'Антон Политов',
    mapByNameAliases: ['Ampernic', 'Anton Politov'],
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/Ampernic' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/vg9TWtByVW'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/168869588?v=4',
    name: 'Владислав Темнов',
    mapByNameAliases: ['trashb1t'],
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/trashb1t' }]
  },
  {
    avatar: 'https://github.com/X1Z53.png',
    name: 'Давид Султаниязов',
    mapByNameAliases: ['X1Z53', 'x1z53', 'Sultaniiazov David'],
    title: 'Разработчик, Участник',
    links: [{ icon: 'github', link: 'https://github.com/X1Z53' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/IpsmO1P5PJ'
  },
  {
    avatar: 'https://github.com/Armatik.png',
    name: 'Семён Фомченков',
    mapByNameAliases: ['Semen Fomchenkov', 'Armatik', 'armatik', 'Семен Васильевич Фомченков'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Armatik' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/2MA0Bm6ax63'
  },
  {
    mapByNameAliases: ['Labaman', 'Mikhail Velichko'],
    name: 'Михаил Величко',
    title: 'Участник',
    avatar: 'https://github.com/Labaman.png',
    links: [
      {
        icon: 'github',
        link: 'https://github.com/Labaman'
      }
    ],
    actionText: 'Поддержать',
    sponsor: 'https://www.tbank.ru/cf/1Erc241qRhw'
  },
  {
    avatar: 'https://github.com/Toxblh.png',
    name: 'Anton Palgunov',
    mapByNameAliases: ['Anton Palgunov', 'Toxblh'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Toxblh' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.donationalerts.com/r/toxblh'
  },
  {
    avatar: 'https://github.com/iDevPro.png',
    name: 'iQQator',
    mapByNameAliases: ['Субач Павел', 'iQQator', 'iDevPro'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/iDevPro' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/collectmoney/crowd/subach.pavel2/I4eLp8903'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/1893474?v=4',
    name: 'Keleth',
    mapByNameAliases: ['Keleth'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Keleth' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/72319244?v=4',
    name: 'Дмитрий Бондарев',
    mapByNameAliases: ['pokedim13', 'h3try'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/pokedim13' }]
  },
  {
    avatar: 'https://github.com/ilyazheprog.png',
    name: 'Илья Женецкий',
    mapByNameAliases: ['ilyazheprog', 'Ilya Zhenetskij'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/ilyazheprog' }]
  },
  {
    avatar: 'https://github.com/Luckenty.png',
    name: 'Дмитрий Орлов',
    mapByNameAliases: ['Dmitry', 'Luckenty'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Luckenty' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/9o0c3eIAJ2D'
  },
  {
    avatar: 'https://github.com/fiersik.png',
    name: 'Кирилл Уницаев',
    mapByNameAliases: ['fiersik', 'Fiersik Kouji'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/fiersik' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/4p7xYDHEH2y'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/156944896?v=4',
    name: 'konoos56',
    mapByNameAliases: ['konoos56'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/konoos56' }]
  },
  {
    avatar: 'https://github.com/ImCatCatcher.png',
    name: 'Арсений Засыпкин',
    mapByNameAliases: ['ImCatCatcher', 'Arseniy Zasypkin'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/ImCatCatcher' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/53rijgvIPem'
  },
  {
    avatar: 'https://github.com/otetswoo.png',
    name: 'otetswoo',
    mapByNameAliases: ['vldmr_true', 'otetswoo'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/otetswoo' }]
  },
  {
    avatar: 'https://github.com/AnameVi.png',
    name: 'AnameVi',
    mapByNameAliases: ['AnameVi', 'AnameV1S'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/AnameVi' }]
  },
  {
    avatar: 'https://github.com/AlexanderShad.png',
    name: 'Александр Шамараев',
    mapByNameAliases: ['Aleksandr Shamaraev', 'Aleksand Shamaraev'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/AlexanderShad' }],
  },
  {
    avatar: 'https://github.com/vlad196.png',
    name: 'Владислав Бабенко',
    mapByNameAliases: ['vlad196', 'Владислав Бабенко'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/vlad196' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/9cI2R0kzzxM'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/48821354?v=4',
    name: 'Жора Змейкин',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Katze-942' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/1qXUImsZFTN'
  },
  {
    avatar: 'https://github.com/linecodesx.png',
    name: 'Хачатур Тоникян',
    mapByNameAliases: ['Feytell228', 'feyte11', 'Khachatur Tonikyan', 'linecodesx'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/linecodesx' }],
    actionText: 'Поддержать',
    sponsor:
      'https://www.tinkoff.ru/collectmoney/crowd/tonikyan.khachatur1/4ijqV39898/?short_link=93LEZqrEeY7&httpMethod=GET'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/118264544?v=4',
    name: 'Belovmv',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Belovmv' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/95986183?v=4',
    name: 'Владимир Васьков',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Rirusha' }]
  },
  {
    avatar: 'https://github.com/Boria138.png',
    name: 'Boria138',
    mapByNameAliases: ['Boria138', 'Boris Yumankulov'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Boria138' }]
  },
  {
    avatar: 'https://github.com/a1ex-ak.png',
    name: 'Алексей Камаев',
    mapByNameAliases: ['Alexey Kamaev', 'a1ex-ak'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/a1ex-ak' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/73014273?v=4',
    name: 'Alex Kryuchkov',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/alexkdeveloper' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/147966355?v=4',
    name: 'alchere',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/alchere' }]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/159694894?v=4',
    name: 'Максим Остапенко',
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Krator3' }],
    actionText: 'Поддержать',
    sponsor: 'https://www.tinkoff.ru/cf/5Jo6TxAo9Un'
  },
  {
    avatar: 'https://github.com/Cron-X.png',
    name: '[Cron:X]',
    mapByNameAliases: ['Cyber-X', 'Cyber-X-Code', 'Cron-X'],
    title: 'Участник',
    links: [{ icon: 'github', link: 'https://github.com/Cyber-X-Code' }]
  },
  {
    name: 'AL-S?',
    mapByNameAliases: ['cryals'],
    title: 'Участник',
    avatar: 'https://avatars.githubusercontent.com/u/99600368?v=4',
    links: [{ icon: 'github', link: 'https://github.com/cryals' }],
    actionText: 'Поддержать',
    sponsor: 'https://yoomoney.ru/to/4100118730672586'
  },
  {
    name: 'Radiolamp',
    mapByNameAliases: ['Radiolamp', 'radiolamp'],
    title: 'Участник',
    avatar: 'https://github.com/radiolamp.png',
    links: [{ icon: 'github', link: 'https://github.com/radiolamp' }],
    actionText: 'Поддержать',
    sponsor:
      'https://www.tinkoff.ru/collectmoney/crowd/osipov.anton16/uMOHe45333/?short_link=1J1DvYNesgD&referer=https%3A%2F%2Fgithub.com%2F&httpMethod=GET'
  }
]
