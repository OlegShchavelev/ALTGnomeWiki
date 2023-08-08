---
layout: home
title: Главная
titleTemplate: ALT Regular Gnome Community

hero:
  name: "ALT Regular Gnome"
  text: "Community"
  tagline: открытого сообщества пользователей операционной системы ALT Linux
  image:
    src: /laptop.png
    alt: Gnome
  actions:
    - theme: brand
      text: Документация
      link: /wiki

features:
  - title: Раньше чем у других
    details: Eжедневно обновляемый репозиторий пакетов свободных программ Sysphus
  - title: Цифровая НЕ зависмость
    details: семейство дистрибутивов Linux, производится в России с 2000 года.
  - title: Открытое сообщество
    details: Путеводитель в мир открытого програмного обеспечения.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/20732384?v=4',
    name: 'Олег Щавелев',
    title: 'Разработчик',
    links: [
      { icon: 'github', link: 'https://github.com/OlegShchavelev' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/57626821?v=4',
    name: 'Armatik',
    title: 'Участник',
    links: [
      { icon: 'github', link: 'https://github.com/Armatik' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Участники
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>