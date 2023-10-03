<script setup lang="ts">
import { ref } from 'vue'
import SideMenu from './components/sidemenu/SideMenu.vue'
import NavBar from './components/navbar/NavBar.vue'
import vResize from '@/directives/vResize'
import ContentMenu from './components/sidemenu/ContentMenu.vue'

const isSideMenuOpen = ref(false)
const toggleMenu = () => {
  isSideMenuOpen.value = !isSideMenuOpen.value
}
</script>

<template>
  <div v-resize class="h-screen w-screen relative overflow-hidden">
    <NavBar v-bind:toggle-menu="toggleMenu" />
    <SideMenu v-bind:is-open="isSideMenuOpen" v-bind:toggleMenu="toggleMenu">
      <ContentMenu v-bind:toggleMenu="toggleMenu" />
    </SideMenu>
    <RouterView />
  </div>
</template>
