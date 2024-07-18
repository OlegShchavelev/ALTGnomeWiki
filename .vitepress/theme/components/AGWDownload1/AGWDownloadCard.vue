<script setup>
const { arch } = defineProps({ arch: Object, name: String })
</script>

<template>
  <article class="AGWGnomeAppCard">
    <img class="logo" :src="'/download/' + name + '.png'" />
    <div class="branches">
      <div class="branch" v-for="(branch, name) of arch" :key="name">
        <strong>{{ name }}: </strong>
        <a class="link" href="link.url" v-for="(link, index) in branch" :key="index">
          {{ link.name + (branch.length - index - 1 ? ', ' : '') }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.AGWGnomeAppCard {
  display: flex;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  padding: 32px;
  gap: 32px;
}

.logo {
  height: fit-content;
  width: 128px;
}

.link {
  text-decoration: none;
}
</style>
