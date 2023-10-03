<script setup lang="ts">
import { Views } from '@/router/views'
import { RouterLink } from 'vue-router'
import NavbarButton from './NavbarButton.vue'

import { isSmallDevice, isTabletDevice } from '@/stores/useSmallDevice'
import router from '@/router'
import ThemeSwitch from './ThemeSwitch.vue'

const props = defineProps({
  toggleMenu: { type: Function, required: true }
})
</script>

<template>
  <nav class="h-14 sm:h-20 border-b flex items-center justify-center">
    <div
      class="h-full flex items-center justify-between flex-1 max-w-[2000px] pl-2 pr-3 sm:pl-6 sm:pr-4 xl:px-10 xl:pl-10 xl:pr-8"
    >
      <div>
        <RouterLink to="/">
          <img class="h-5 sm:h-6 xl:h-7 2xl:h-9" src="/src/assets/company_logo_1.svg" />
        </RouterLink>
      </div>
      <div class="flex h-full gap-3 xl:gap-4 2xl:gap-6 items-center">
        <div
          class="h-full flex gap-1 text-lg xl:gap-4 xl:text-lg items-center 2xl:gap-8 2xl:text-2xl font-semibold"
        >
          <NavbarButton
            name="Strona Główna"
            v-if="!isSmallDevice"
            v-bind:path="Views.Home"
            v-bind:isActive="Views.Home === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Aktualności"
            v-if="!isSmallDevice"
            v-bind:path="Views.Feed"
            v-bind:isActive="Views.Feed === router.currentRoute.value.path"
          />
          <NavbarButton
            name="O nas"
            v-if="!isSmallDevice"
            v-bind:path="Views.About"
            v-bind:isActive="Views.About === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Produkty"
            v-if="!isTabletDevice"
            v-bind:path="Views.Products"
            v-bind:isActive="Views.Products === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Sektory"
            v-if="!isTabletDevice"
            v-bind:path="Views.Sectors"
            v-bind:isActive="Views.Sectors === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Usługi"
            v-if="!isTabletDevice"
            v-bind:path="Views.Services"
            v-bind:isActive="Views.Services === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Kariera"
            v-if="!isTabletDevice"
            v-bind:path="Views.Career"
            v-bind:isActive="Views.Career === router.currentRoute.value.path"
          />
          <NavbarButton
            name="Kontakt"
            v-if="!isTabletDevice"
            v-bind:path="Views.Contact"
            v-bind:isActive="Views.Contact === router.currentRoute.value.path"
          />
        </div>
        <div class="hidden sm:block h-[2lh] w-[1px] min-w-[1px] bg-gray-400" />
        <ThemeSwitch />
        <div class="sm:hidden h-[1.5lh] sm:h-[2lh] w-[1px] min-w-[1px] bg-gray-400" />
        <button
          @click="props.toggleMenu"
          class="lg:hidden h-8 w-8 2xl:w-10 2xl:h-10 sm:w-9 sm:h-9 rounded-full bg-gray-200 hover:bg-gray-300 hover:text-black text-black/70 flex justify-center items-center"
        >
          <v-icon name="fa-bars" class="scale-[1.05]" />
        </button>
      </div>
    </div>
  </nav>
</template>
