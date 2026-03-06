<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="flex min-h-screen bg-white">

    <Sidebar />

    <div class="flex-1 flex flex-col bg-[#d7e3f0] rounded-[25px]">

      <Header />

      <main class="p-6">
        <slot />
      </main>

    </div>

  </div>
</template>