<script setup lang="ts">
import GradientText from "./bits/GradientText.vue";
const { size = "md" } = defineProps<{
  size?: "sm" | "md" | "lg";
  title: string;
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
  <div className="mt-24">
    <GradientText
      :text="title"
      :colors="['#ffaa40', '#9c40ff', '#ffaa40']"
      :animation-speed="8"
      :show-border="true"
      className="p-2 w-60"
    />
  </div>
</template>
