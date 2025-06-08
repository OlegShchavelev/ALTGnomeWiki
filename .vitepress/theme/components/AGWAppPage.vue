<template>
  <div class="AMWAppPage">
    <slot />
  </div>
</template>

<style scoped>
.AMWAppPage {
  margin: 96px 0;
}
@media (min-width: 768px) {
  .AMWAppPage {
    margin: 128px 0;
  }
}
</style>
