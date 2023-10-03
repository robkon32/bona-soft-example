<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  name: { type: String, required: true },
  path: { type: String, required: true },
  isActive: { type: Boolean, required: true }
})
</script>
<template>
  <RouterLink
    class="aria-selected:border-b-2 px-1 border-red-800/60 py-2 aria-selected:pb-[6px]"
    v-bind:aria-selected="props.isActive"
    v-bind:to="props.path"
  >
    {{ props.name }}
  </RouterLink>
</template>
