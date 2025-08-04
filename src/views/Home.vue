<template>
  <div class="relative w-full h-full">
    <div @click="handdledelay">
      <Orb
        className="w-full h-full absolute left-1/2 -translate-x-1/2  top-1/2 transform -translate-y-1/2"
        :hoverIntensity="3.65"
        :rotateOnHover="false"
        :hue="237"
        :forceHoverState="false"
      />
    </div>
    <a href="javascript:alert('点击环绕光圈穿越时空！')"
      ><CircularText
        className="font-roboto text-blue-500  absolute  top-1/2 transform -translate-y-1/2"
        text=" 欢 迎 光 临 alipay.wealipay.top"
        :spin-duration="20"
        on-hover="speedUp"
    /></a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Orb from "@/components/bits/Orb.vue";
import CircularText from "@/components/bits/CircularText.vue";

const router = useRouter();
const handdledelay = () => {
  setTimeout(() => {
    router.push("/list");
  }, 2000);
};
</script>
