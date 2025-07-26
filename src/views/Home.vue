<template>
  <div class="relative w-full h-full">
    <Orb :hoverIntensity="3.65" :rotateOnHover="false" :hue="237" :forceHoverState="false" />
    <CircularText
    text="欢迎*光临*alipay.wealipay.top * "
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