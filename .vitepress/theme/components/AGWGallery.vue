<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { DefaultTheme, useData } from 'vitepress'

import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

const { theme, frontmatter } = useData();
const galleries = frontmatter.value.gallery ?? theme.value.gallery ?? [];


const onSwiper = (swiper: any) => console.log(swiper);
const onSlideChange = () => console.log('slide change');

import 'swiper/css';
import 'swiper/css/pagination';

</script>


<template>
    <div class="galleries">
        <h3 v-html="'Галерея ' + frontmatter.title"></h3>
        <swiper :slides-per-view="1" :breakpoints="{ 767: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }"
            :space-between="20"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="file in galleries.items" :key="galleries.items.src" class="item">
                <figure class="figure">
                    <VPImage :image="file.src" :alt="frontmatter.title" />
                </figure>
            </swiper-slide>
        </swiper>
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

.figure::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.figure>* {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
}

.figure > :deep(.VPImage) {
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
}

</style> 