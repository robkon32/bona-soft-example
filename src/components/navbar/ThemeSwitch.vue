<script setup lang="ts">
import { ref } from "vue";

const theme = ref("light");
const handleClick = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  // document.documentElement.classList.toggle('dark')
};
</script>

<template>
  <button
    @click="handleClick"
    class="h-8 w-8 2xl:w-10 2xl:h-10 sm:w-9 sm:h-9 rounded-full bg-gray-200 hover:bg-gray-300 hover:text-black text-black/70 flex justify-center items-center"
  >
    <v-icon
      v-if="theme === `light`"
      name="fa-sun"
      class="scale-[1.15] sm:scale-[1.35] 2xl:scale-[1.5]"
    />
    <v-icon v-else name="fa-moon" class="scale-[1.15] sm:scale-[1.35] 2xl:scale-[1.5]" />
  </button>
</template>
