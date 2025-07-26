<template>
  <div class="relative w-full h-[600px]">
    <Orb :hoverIntensity="0.5" :rotateOnHover="false" :hue="0" :forceHoverState="false" />
    <span>alipay.wealipay.top</span>
  </div>
</template>

<script setup lang="ts">
  import Orb from "@/components/bits/Orb.vue";
</script>