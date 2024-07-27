<script setup>
const paddingTop = ref(0);
// #ifdef MP
let capsuleInfo = uni.getMenuButtonBoundingClientRect();
paddingTop.value = capsuleInfo.bottom;
// #endif
</script>

<template>
  <view :style="{paddingTop: `${paddingTop}px`}">
    <slot></slot>
  </view>
</template>
