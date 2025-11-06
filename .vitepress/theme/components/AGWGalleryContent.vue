<script setup lang="ts">
import { computed } from 'vue'
import { VPImage } from 'vitepress/theme'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { AGWGallery } from '../types/index'
import 'swiper/css'

interface Props {
  type?: 'grid' | 'carousel' | 'slider'
  images?: AGWGallery.Image[]
  alias?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'grid',
  images: () => [],
  alias: 'gallery'
})
</script>

<template>
  <div class="AGWGalleryContent">
    <!-- Slider -->
    <template v-if="type === 'slider' && images.length > 0">
      <Swiper :slides-per-view="1.05" :space-between="20">
        <SwiperSlide v-for="image in images" :key="image.src">
          <figure class="figure">
            <figure class="figure ratio ratio-16x9">
              <VPImage
                :image="image?.src"
                :data-fancybox="alias"
                :data-caption="image.caption"
                :alt="image?.alt ?? 'Gallery image'"
              />
            </figure>
            <figcaption v-if="image.caption" class="figcaption">
              {{ image.caption }}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </template>

    <!-- Grid -->
    <template v-else-if="type === 'grid' && images.length > 0">
      <div class="AGWGalleryContentGrid">
        <div v-for="image in images" :key="image.src" class="AGWGalleryGridItem">
          <VPImage :image="image?.src" :data-fancybox="alias" :alt="image?.alt ?? 'Gallery image'" />
        </div>
      </div>
    </template>

    <!-- Carousel -->
    <template v-else-if="type === 'carousel' && images.length > 0">
      <Swiper
        :slides-per-view="1.05"
        :space-between="20"
        :breakpoints="{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }"
      >
        <SwiperSlide v-for="image in images" :key="image.src">
          <figure class="figure">
            <figure class="figure ratio ratio-1x1">
              <VPImage
                :image="image.src"
                :data-fancybox="alias"
                :data-caption="image.caption"
                :alt="image?.alt ?? 'Gallery image'"
              />
            </figure>
            <figcaption v-if="image.caption" class="figcaption">
              {{ image.caption }}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </template>

    <div v-else class="empty-gallery">
      <p>No images to display</p>
    </div>
  </div>
</template>

<style scoped>
.AGWGalleryContent {
  margin-top: 20px;
}

.AGWGalleryContentGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.AGWGalleryGridItem {
  overflow: hidden;
  border-radius: 8px;
}

.figure {
  position: relative;
  width: 100%;
  margin: 0;
}

.ratio::before {
  content: '';
  display: block;
}

.ratio.ratio-1x1::before {
  padding-top: 100%;
}

.ratio.ratio-4x3::before {
  padding-top: 75%;
}

.ratio.ratio-16x9::before {
  padding-top: 56.25%;
}

.ratio.ratio-21x9::before {
  padding-top: 42.8571428571%;
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
}

.figcaption {
  margin-top: 8px;
  padding: 0 4px;
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--vp-c-text-2, #666);
  text-align: center;
  font-style: italic;
}

@media (max-width: 768px) {
  .figcaption {
    font-size: 0.8rem;
    margin-top: 6px;
  }
}

.dark .figcaption {
  color: var(--vp-c-text-2, #aaa);
}
</style>
