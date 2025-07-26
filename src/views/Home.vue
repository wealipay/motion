<template>
  <div class="relative w-full h-full">
    <Orb className="w-full h-full absolute left-1/2 -translate-x-1/2  top-1/2 transform -translate-y-1/2" :hoverIntensity="3.65" :rotateOnHover="false" :hue="237" :forceHoverState="false" />
    <CircularText
    text=" 欢 迎 光 临 alipay.wealipay.top"
    :spin-duration="20"
    on-hover="speedUp"
    class-name="text-blue-500"
  />
  </div>
</template>

<script setup lang="ts">
  import Orb from "@/components/bits/Orb.vue";
  import CircularText from "@/components/bits/CircularText.vue";
</script>