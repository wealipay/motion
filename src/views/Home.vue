<template>
  <div class="relative w-full h-full">
    <Orb :hoverIntensity="3.65" :rotateOnHover="false" :hue="237" :forceHoverState="false" />
    <div className="mx-auto">alipay.wealipay.top</div>
  </div>
</template>

<script setup lang="ts">
  import Orb from "@/components/bits/Orb.vue";
</script>