<template>
  <div class="AGWAppPage">
    <slot />
  </div>
</template>

<style scoped>
.AGWAppPage {
  margin: 96px 0;
}

@media (min-width: 768px) {
  .AGWAppPage {
    margin: 128px 0;
  }
}

.VPHome :slotted(.AGWAppPageTitle) {
  border-top: 1px solid var(--vp-c-gutter);
  padding-top: 88px !important;
}

:slotted(.AGWAppPageSection + .AGWAppPageSection),
:slotted(.AGWAppPageMembers + .AGWAppPageSection) {
  margin-top: 64px;
}

:slotted(.AGWAppPageMembers + .AGWAppPageMembers) {
  margin-top: 24px;
}

@media (min-width: 768px) {
  :slotted(.AGWAppPageTitle + .AGWAppPageSection) {
    margin-top: 16px;
  }

  :slotted(.AGWAppPageSection + .AGWAppPageSection),
  :slotted(.AGWAppPageMembers + .AGWAppPageSection) {
    margin-top: 96px;
  }
}

:slotted(.AGWAppRows) {
  padding: 0 24px;
}

@media (min-width: 768px) {
  :slotted(.AGWAppRows) {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  :slotted(.AGWAppRows) {
    padding: 0 64px;
  }
}
</style>
