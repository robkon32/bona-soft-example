<script setup lang="ts">
import { ref, type Ref } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  toggleMenu: { type: Function, required: true }
})

const contentRef: Ref<HTMLElement | null> = ref(null)

const onClick = (e: MouseEvent) => {
  e.target === contentRef.value && props.toggleMenu()
}
</script>
<template>
  <div
    v-bind:aria-expanded="props.isOpen"
    className="pointer-events-none absolute right-0 top-0 z-20 h-screen w-screen select-none bg-black opacity-0 aria-expanded:opacity-70 aria-selected:pointer-events-auto"
  />
  <div
    @click="onClick"
    ref="contentRef"
    v-bind:aria-expanded="props.isOpen"
    className="flex justify-end absolute right-0 top-0 z-30 h-screen w-screen translate-x-[100%] outline-none transition-all duration-[300ms] aria-expanded:translate-x-0 aria-selected:duration-200"
  >
    <slot></slot>
  </div>
</template>
