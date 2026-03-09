<script setup>
import { ref } from "vue"

import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>

<template>
  <div class="flex min-h-screen bg-white p-1">

    <Sidebar :open="sidebarOpen" />

    <div class="flex-1 flex flex-col bg-[#d7e3f0] rounded-[25px] transition">

      <Header @toggleSidebar="toggleSidebar" />
      <main class="p-6">
        <slot />
      </main>

    </div>

  </div>
</template>