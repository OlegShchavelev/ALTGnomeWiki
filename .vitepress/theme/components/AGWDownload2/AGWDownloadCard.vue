<script setup>
defineProps({ branch: Object, name: String })
</script>

<template>
  <article class="card">
    <div class="profile">
      <img class="logo" :src="'/download/' + name + '.png'" />
      <div class="data">
        {{ branch.summary }}
        <div class="branches">
          <div class="arch" v-for="(arch, name) of branch.archs" :key="name">
            <strong>{{ name }}: </strong>
            <a class="link" href="link.url" v-for="(link, index) in arch" :key="index">
              {{ link.name + (arch.length - index - 1 ? ', ' : '') }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="recommended">{{ branch.recommended ? 'Рекомендовано' : '' }}</div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.recommended {
  width: 150px;
  text-align: center;
  background-color: var(--vp-button-brand-bg);
  border-radius: 6px;
  position: absolute;
  bottom: -12px;
}

.profile {
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

.data {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link {
  text-decoration: none;
}
</style>
