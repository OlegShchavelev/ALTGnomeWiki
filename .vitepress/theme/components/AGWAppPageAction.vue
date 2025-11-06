<template>
  <div class="AGWAppPageAction">
    <slot name="action" />
  </div>
</template>

<style scoped>
.AGWAppPageAction {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .AGWAppPageAction {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .AGWAppPageAction {
    padding: 80px 64px 48px;
  }
}
</style>
