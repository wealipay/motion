<script setup lang="ts">
const { size = "md" } = defineProps<{
  size?: "sm" | "md" | "lg";
  reverse?: boolean;
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
  <button :class="[getSize(), reverse ? '' : '']">{{ text }}</button>
</template>
