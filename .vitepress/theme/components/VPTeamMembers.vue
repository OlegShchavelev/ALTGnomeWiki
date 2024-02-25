<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import VPTeamMembersItem from './VPTeamMembersItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';

const modules = [Pagination, Navigation, Keyboard];

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const onSwiper = (swiper: any) => console.log(swiper);
const onSlideChange = () => console.log('slide change');

interface Props {
  size?: 'small' | 'medium'
  members: DefaultTheme.TeamMember[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.members.length}`])
</script>

<template>
  <div class="VPTeamMembers" :class="classes">
    <div class="container">
      <swiper 
        :slides-per-view="1.2" 
        :breakpoints="{ 
          767: { slidesPerView: 2.2 }, 
          1024: { slidesPerView: 4.2 } 
        }" 
        :modules="modules"
        :freeMode="true"
        :keyboard="{ enabled: true }"
        :pagination="{ 
          clickable: true, 
          dynamicBullets: true 
        }"
        :navigation="true"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide v-for="member in members" :key="member.name" class="item">
          <VPTeamMembersItem :size="size" :member="member" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1152px;
}

.swiper {
  padding-bottom: 60px;
  margin-bottom: -60px;
}

@media (min-width: 768px) {
  .swiper {
    padding-bottom: 80px;
    margin-bottom: -80px;
  }
}
</style>

<style>
.VPTeamMembers * .swiper-button-prev, 
.VPTeamMembers * .swiper-button-next {
  top: var(--swiper-navigation-top-offset, 95%) !important;
}
</style>