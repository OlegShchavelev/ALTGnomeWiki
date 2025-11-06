<template>
  <div class="AGWGalleryPageTitle">
    <h3 v-if="$slots.title" class="title">
      <slot name="title" />
    </h3>
  </div>
</template>
