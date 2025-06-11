<template>
  <div class="AGWTeamPageAction">
    <slot name="action" />
  </div>
</template>

<style scoped>
.AGWTeamPageAction {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .AGWTeamPageAction {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .AGWTeamPageAction {
    padding: 80px 64px 48px;
  }
}
</style>
