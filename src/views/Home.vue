<template>
  <div class="relative w-full h-[1600px]">
    <Orb :hoverIntensity="0.5" :rotateOnHover="false" :hue="0" :forceHoverState="false" />
    <div className="mx-auto">alipay.wealipay.top</div>
  </div>
</template>

<script setup lang="ts">
  import Orb from "@/components/bits/Orb.vue";
</script>