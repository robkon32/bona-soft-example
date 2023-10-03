<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  path: { type: String, required: true },
  isActive: { type: Boolean, required: true }
})
</script>
<template>
  <div class="relative ml-[2px] my-1 flex items-center">
    <RouterLink
      class="flex items-center border-b-gray-200 h-10 hover:bg-gray-100 w-full py-1 px-4 after:w-1 after:absolute after:h-full rounded-lg after:left-0 aria-selected:after:bg-red-800/60 aria-selected:font-semibold text-gray-500 aria-selected:text-black tracking-wide"
      v-bind:aria-selected="props.isActive"
      v-bind:to="props.path"
    >
      <slot></slot>
    </RouterLink>
  </div>
</template>
<!-- //border-red-800/60 -->
