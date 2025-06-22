<script setup lang="ts">
import { VPButton, VPLink } from 'vitepress/theme'
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="AGWDownloadsItem">
    <div class="card">
      <div class="body">
        <div class="title">{{ image.name }}</div>
        <div class="text">{{ image.description }}</div>
        <div class="actions">
          <VPLink href="#">Примечание к выпуску</VPLink>
          <VPLink href="#">Инструкция по установке</VPLink>
          <VPLink href="#">Пользовательское соглашение</VPLink>
        </div>
      </div>
      <div class="body">
        <div class="downloads">
          <template v-for="image in image.downloads" :key="image.arch">
            <div v-for="branch in image.branches" :key="branch.name" class="download">
              <dl>
                <dt>Архитектура:</dt>
                <dd>{{ image.arch }}</dd>
                <dt>Размер:</dt>
                <dd>2 Gb</dd>
                <dt>Тип выпуска:</dt>
                <dd>{{ branch.name }}</dd>
              </dl>
              <div class="action">
                <div v-if="branch.images[0].urls.length === 1">
                  <VPButton size="medium" tag="a" :href="branch.images[0].urls[0]" text="Скачать" />
                </div>
                <div v-else class="dropdown">
                  <VPButton size="medium" class="dropbtn" text="Скачать" />
                  <div class="dropdown-content">
                    <a v-for="(url, index) in branch.images[0].urls" :key="index" :href="url">
                      Cкачать (Зеркало {{ index + 1 }})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.AGWDownloadsItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
}

.card {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
  padding: 48px 32px;
  position: relative;
}

.AGWDownloadsItem .title {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.title {
  margin: 0;
  font-weight: 600;
}

.title + .text {
  margin-top: 16px;
}

.title + .actions,
.text + .actions {
  margin-top: 16px;
}

.text {
  margin: 0 auto;
}

.actions {
  display: inline-flex;
  gap: 8px;
}

.actions .link {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
  text-decoration: none;
}

.actions .link:hover {
  color: var(--vp-c-brand-1);
}

.body + .body {
  margin-top: 32px;
}

.downloads {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.download {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: var(--vp-c-bg);
  border-radius: 12px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--vp-c-bg);
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  overflow: hidden;
  top: 100%; /* Меняем с calc(100% + 8px) на 100% */
  right: 0;
  padding-top: 8px; /* Внутренний отступ вместо внешнего */
  margin-top: 0; /* Убираем внешний отступ */
}

.dropdown-content::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: transparent;
}

.dropdown-content a {
  color: var(--vp-c-text-1);
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  font-size: 14px;
  transition: background-color 0.2s;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.dropdown-content a:last-child {
  border-bottom: none;
}

.dropdown-content a:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.dropdown:hover .dropdown-content {
  display: block;
}

dl {
  margin-top: 0;
  margin-bottom: 0;
  display: inline-flex;
  margin-right: auto;
}

dt {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

dd {
  margin-left: 0;
  font-size: 14px;
  font-weight: bold;
  padding-left: 4px;
  padding-right: 8px;
}
</style>
