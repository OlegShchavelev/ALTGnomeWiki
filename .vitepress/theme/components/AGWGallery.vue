<script setup lang="ts">
import { type Ref, computed, onMounted } from 'vue'
import { DefaultTheme, useData, useRoute } from 'vitepress'

import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import setViewer from 'vitepress-plugin-image-viewer/lib/viewer'

const { theme, frontmatter } = useData()

const props = defineProps({
  id: Number
})


const galleries = props.id && frontmatter.value.gallery[props.id] ? frontmatter.value.gallery[props.id] : frontmatter.value.gallery[0] ?? frontmatter.value.gallery ?? theme.value.gallery ?? []

const onSwiper = (swiper: any) => console.log(swiper)
const onSlideChange = () => console.log('slide change')

import 'swiper/css'
import 'swiper/css/pagination'

console.log(props)

</script>

<template>
  <div class="galleries">
    <h3 v-if="galleries.title" v-html="galleries.title"></h3>
    <div v-if="galleries.type == 'carousel'">
      <swiper
        :slides-per-view="1.1"
        :breakpoints="{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
          <figure class="figure ratio ratio-1x1">
            <VPImage :image="file.src" :alt="frontmatter.title" class="gallery" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="galleries.type == 'slider'">
      <swiper :slides-per-view="1.05" :space-between="20" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
          <figure class="figure ratio ratio-16x9">
            <VPImage :image="file.src" :alt="frontmatter.title" class="gallery" />
          </figure>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  margin-top: 24px;
}

.figure {
  position: relative;
  width: 100%;
}

.ratio::before {
  content: '';
  display: block;
}

.ratio.ratio-1x1::before {
  padding-top: 100%;
}

.ratio.ratio-16x9::before {
  padding-top: 56.25%;
}

.figure > * {
  object-fit: cover;
}

.ratio > * {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.figure > :deep(.VPImage) {
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
}
</style>
