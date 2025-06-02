<script setup lang="ts">
import { useData } from 'vitepress'

import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid } from 'swiper/modules'

const { theme, frontmatter } = useData()

const props = defineProps({
  id: Number
})

const galleries = frontmatter.value.gallery ? props.id && frontmatter.value.gallery[props.id] ? frontmatter.value.gallery[props.id] : frontmatter.value.gallery[0] ?? frontmatter.value.gallery ?? theme.value.gallery ?? [] : undefined


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'


</script>

<template>
  <div class="galleries" v-if="galleries">
    <h3 v-if="galleries.title" v-html="galleries.title"></h3>
    <div v-if="galleries.type == 'grid'" class="grid-container">
      <swiper
        :modules="[Grid]"
        :slides-per-view="galleries.col"
        :breakpoints="{ 
          767: { slidesPerView: 2 },
          1024: { 
            slidesPerView: galleries.col,
            grid: {
              fill: 'row',
              rows: galleries.row
            }
          } 
        }"
        :space-between="20"
      >
        <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
          <figure class="figure">
              <figure class="figure ratio ratio-1x1">
                <VPImage :image="file.src" :alt="frontmatter.title" class="gallery" />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
          </figure>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="galleries.type == 'carousel'">
      <swiper
        :slides-per-view="1.1"
        :breakpoints="{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }"
        :space-between="20"
      >
        <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
          <figure class="figure">
              <figure class="figure ratio ratio-1x1">
                <VPImage :image="file.src" :alt="frontmatter.title" class="gallery" />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
          </figure>
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="galleries.type == 'slider'">
      <swiper :slides-per-view="1.05" :space-between="20">
        <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
          <figure class="figure">
              <figure class="figure ratio ratio-16x9">
                <VPImage :image="file.src" :alt="frontmatter.title" class="gallery" />
              </figure>
              <figcaption>{{ file.text }}</figcaption>
          </figure>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>

figcaption {
  color: var(--vp-c-text-2);
}

.swiper {
  margin-top: 24px;
}
.grid-container {
  max-width: 800px;
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
