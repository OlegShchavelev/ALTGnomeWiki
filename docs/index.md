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
      link:  /download
    - theme: alt
      text: Документация
      link: /wiki

features:
  - title: Раньше чем у других
    details: Eжедневно обновляемый репозиторий пакетов свободных программ Sisyphus
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
  VPHomeSponsors,
  VPSponsors
} from 'vitepress/theme'
import { members } from '../_data/team'
import { sponsors } from '../_data/sponsors'
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

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
  />