---
layout: home
title: Главная
titleTemplate: ALT Regular Gnome Community

hero:
  name: "ALT Regular Gnome"
  text: "Community"
  tagline: открытое сообщество пользователей операционной системы ALT Regular Gnome
  image:
    src: /laptop.png
    alt: Gnome
  actions:
    - theme: brand
      text:  Cкачать ALT Regular Gnome
      link:  https://mirror.yandex.ru/altlinux-nightly/tested/regular-gnome-latest-x86_64.iso
    - theme: alt
      text: Документация
      link: /wiki

features:
  - title: Раньше чем у других
    details: Eжедневно обновляемый репозиторий пакетов свободных программ Sysphus
  - title: Цифровая НЕзависмость
    details: семейство дистрибутивов Linux, производится в России с 2000 года.
  - title: Открытое сообщество
    details: Путеводитель в мир открытого програмного обеспечения.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'
import { members } from '../_data/team.js'
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