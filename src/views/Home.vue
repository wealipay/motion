<template>
  <div class="relative w-full h-full">
    <Orb className="w-full h-full absolute left-1/2 -translate-x-1/2  top-1/2 transform -translate-y-1/2" :hoverIntensity="3.65" :rotateOnHover="false" :hue="237" :forceHoverState="false" />
    <a href="javascript:alert('点击环绕光圈穿越时空！')"><CircularText
    className="font-roboto text-blue-500  absolute  top-1/2 transform -translate-y-1/2"
    text=" 欢 迎g 光 临 alipay.wealipay.top"
    :spin-duration="20"
    on-hover="speedUp"
  /></a>
  </div>
</template>

<script setup lang="ts">
  import Orb from "@/components/bits/Orb.vue";
  import CircularText from "@/components/bits/CircularText.vue";
</script>