<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  pageData: Object
})

const cardProps = computed(()=>{
    if (props.pageData.frontmatter.appstream) {
        const { icon, name, summary } = props.pageData.frontmatter.appstream
        return {
            icon: icon,
            name: name,
            summary: summary
        }
    }

    const title = props.pageData.frontmatter.title
    
    return {
        title: title
    }
})

</script>

<template>
  <article class="AGWGnomeAppCard">
    <div class="profile">
      <img class="avatar-img" :src="cardProps?.icon" />
      <div class="data">
        <h3 class="name">
          {{ cardProps.name ?? cardProps.title ?? '' }}
        </h3>
        <p class="affiliation">
          {{ cardProps?.summary }}
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.badges {
  margin-top: 5px;
  justify-content: center;
  display: grid;
}

AGWAsideMetaLink {
  text-decoration: none;
}

.AGWGnomeAppCard {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.profile {
  padding: 32px;
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  padding-top: 20px;
  text-align: center;
}

.avatar-img {
  width: 64px;
  height: 64px;
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 5px;
}

.name {
  line-height: 24px;
  font-size: 16px;
  margin: 0;
  font-weight: 600;
}

.affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
