<script setup lang=ts>

import { loading_placeholders } from '../../../_data/team';

const random_placeholder = loading_placeholders[Math.floor(Math.random()*loading_placeholders.length)]

</script>

<template>
      <div class='AGWSpiner'>
        <div class="container">
          <div class="item">
            <span class="mr-2 w-12 h-12 text-primary-500 i-svg-spinners-270-ring-with-bg" /></br>
            <h2 class="title">{{ random_placeholder }}</h2>
          </div>
        </div>
      </div>
</template>

<style scoped>
.AGWSpiner .item {
    margin-top: 150px;
    margin-bottom: 150px;
    color: var(--vp-c-text-2);
    display: grid;
    place-items: center;
}
.AGWSpiner .item .title{
    margin-top: 10px;
}

.AGWSpiner .container {
  position: relative;
  padding: 0 24px;
  display: grid;
  place-items: center;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
} 

@media only screen and (max-width: 1024px) {
.AGWSpiner .container {
  margin: 0 auto;
  max-width: 90%;
}
}

</style>