<script setup lang="ts">
import GradientText from "./bits/GradientText.vue";
const { size = "md" } = defineProps<{
  size?: "sm" | "md" | "lg";
  reverse?: boolean;
}>();
const getSize = () => {
  switch (size) {
    case "sm": {
      return "w-14 h-8";
    }
    case "lg": {
      return "w-28 h-11";
    }
    default: {
      return "w-20 h-11";
    }
  }
};
</script>

<template>
  <button :class="[getSize(), reverse ? 'bg-white' : 'bg-black']">
    <GradientText text="Add a splash of color!"
    :colors="['#ffaa40', '#9c40ff', '#ffaa40']"
    :animation-speed="8"
    :show-border="false"
    class-name="your-custom-class" />
  </button>
</template>
