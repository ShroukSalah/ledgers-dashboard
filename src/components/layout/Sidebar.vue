<script setup>
import logo from '../../assets/logo.png'

// Icons as Vue components (PascalCase)
import DashboardIcon from '../icons/dashboard.vue'
import LayersIcon from '../icons/layers.vue'
import LineGraphIcon from '../icons/line-graph.vue'
import SettingIcon from '../icons/setting.vue'

defineProps({
  open: Boolean
})
</script>

<template>
  <aside class="  bg-white  min-h-screen flex flex-col items-center transition sticky h-full top-0"
    :class="!open ? 'translate-x-0 w-[75px] ' : ' translate-x-full md:translate-x-0 w-0 hidden'">

    <!-- Logo -->
    <div class="p-3">
      <img :src="logo" alt="Logo" class="w-12 h-auto" />
    </div>

    <!-- Navigation -->
    <nav class="flex flex-col space-y-4 mt-[20vh]">
      <a class="p-3 rounded-full active  hover:bg-gray-200">
        <DashboardIcon class="w-5 h-5" />
      </a>

      <a class="p-3 rounded-full hover:bg-gray-100">
        <LayersIcon class="w-6 h-6" />
      </a>

      <a class="p-3 rounded-full hover:bg-gray-100">
        <LineGraphIcon class="w-6 h-6" />
      </a>

      <a class="p-3 rounded-full hover:bg-gray-100">
        <SettingIcon class="w-6 h-6" />
      </a>
    </nav>

  </aside>
</template>

<style>
.active{
  background-color: #0b86df;
      width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.active svg{
  filter: invert(1)brightness(1);
}
</style>