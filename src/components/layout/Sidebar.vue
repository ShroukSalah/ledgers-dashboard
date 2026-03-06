<script setup>
import logo from '../../assets/logo.png'

// Icons as Vue components (PascalCase)
import DashboardIcon from '../icons/dashboard.vue'
import LayersIcon from '../icons/layers.vue'
import LineGraphIcon from '../icons/line-graph.vue'
import SettingIcon from '../icons/setting.vue'
</script>

<template>
  <aside class="w-[75px] bg-white  min-h-screen flex flex-col items-center">

    <!-- Logo -->
    <div class="p-4">
      <img :src="logo" alt="Logo" class="w-12 h-auto" />
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col space-y-4 mt-6">
      <a class="p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
        <DashboardIcon class="w-6 h-6" />
      </a>

      <a class="p-3 rounded-lg hover:bg-gray-100">
        <LayersIcon class="w-6 h-6" />
      </a>

      <a class="p-3 rounded-lg hover:bg-gray-100">
        <LineGraphIcon class="w-6 h-6" />
      </a>

      <a class="p-3 rounded-lg hover:bg-gray-100">
        <SettingIcon class="w-6 h-6" />
      </a>
    </nav>

  </aside>
</template>