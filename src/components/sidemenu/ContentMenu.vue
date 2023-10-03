<script setup lang="ts">
import { Views } from '@/router/views'
import router from '@/router'
import SideMenuButton from './SideMenuButton.vue'

const props = defineProps({
  toggleMenu: { type: Function, required: true }
})
</script>

<template>
  <div
    class="relative h-full max-w-[85%] w-72 bg-white flex flex-col overflow-y-auto overflow-x-hidden"
  >
    <div class="relative flex justify-center py-3">
      <button class="absolute left-3">
        <v-icon @click="props.toggleMenu" name="fa-times" class="scale-[1.25]" />
      </button>
      <h2 class="text-center text-xl">Menu</h2>
    </div>
    <ul class="flex flex-col relative border-t pt-1 pb-2">
      <SideMenuButton
        v-bind:path="Views.Home"
        v-bind:isActive="Views.Home === router.currentRoute.value.path"
      >
        <v-icon name="fa-home" class="scale-[1.25]" />
        <span class="pl-3"> Strona Główna </span>
      </SideMenuButton>

      <SideMenuButton
        v-bind:path="Views.Feed"
        v-bind:isActive="Views.Feed === router.currentRoute.value.path"
      >
        <v-icon name="fa-regular-newspaper" class="scale-[1.25]" />
        <span class="pl-3"> Aktualności </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.About"
        v-bind:isActive="Views.About === router.currentRoute.value.path"
      >
        <v-icon name="fa-american-sign-language-interpreting" class="scale-[1.25]" />
        <span class="pl-3"> O nas </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.Products"
        v-bind:isActive="Views.Products === router.currentRoute.value.path"
      >
        <v-icon name="fa-shopping-cart" class="scale-[1.25]" />
        <span class="pl-3"> Produkty </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.Sectors"
        v-bind:isActive="Views.Sectors === router.currentRoute.value.path"
      >
        <v-icon name="fa-bullseye" class="scale-[1.25]" />
        <span class="pl-3"> Sektory </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.Services"
        v-bind:isActive="Views.Services === router.currentRoute.value.path"
      >
        <v-icon name="fa-cubes" class="scale-[1.25]" />
        <span class="pl-3"> Usługi </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.Career"
        v-bind:isActive="Views.Career === router.currentRoute.value.path"
      >
        <v-icon name="fa-microphone-alt" class="scale-[1.25]" />
        <span class="pl-3"> Kariera </span>
      </SideMenuButton>
      <SideMenuButton
        v-bind:path="Views.Contact"
        v-bind:isActive="Views.Contact === router.currentRoute.value.path"
      >
        <v-icon name="fa-phone-alt" class="scale-[1.25] rotate-[20deg]" />
        <span class="pl-3"> Kontakt </span>
      </SideMenuButton>
    </ul>
    <img class="h-6 mt-10 mb-5 mx-10" src="/src/assets/company_logo_1.svg" />
    <div class="flex gap-5 justify-center">
      <a target="_blank" href="https://www.facebook.com/people/BonaSoft/100038756592745/">
        <v-icon name="fa-facebook" class="scale-[1.65] text-sky-600/80" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/company/bona-soft">
        <v-icon name="fa-linkedin" class="text-blue-800 scale-[1.65]" />
      </a>
    </div>
    <div
      class="absolute bottom-0 flex justify-center flex-wrap text-2xs text-gray-500 mt-8 mx-3 break-words"
    >
      <span>Prywatność</span>
      <div class="h-[1lh] px-[2px]">|</div>
      <span>Pliki cookie</span>
      <div class="h-[1lh] px-[2px]">|</div>
      <span class="tracking-wide">Bonasoft © 2023</span>
    </div>
  </div>
</template>
