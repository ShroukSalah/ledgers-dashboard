<script setup>
import { ref } from "vue"
import DashboardIcon from '../icons/dashboard.vue'

/* events */
const emit = defineEmits(["toggleSidebar", "changeTab"])

/* tabs */
const tabs = ["Finance", "Sales", "HR", "MGMT"]
const activeTab = ref("Finance")

const selectTab = (tab) => {
  activeTab.value = tab
  emit("changeTab", tab)
}
</script>

<template>
  <header class="w-full">

    <div class=" flex  lg:flex-row flex-col-reverse justify-between pb-4 md:px-6 px-4 ">

      <!-- LEFT -->

      <div class="lg:flex items-center gap-3 py-3">

        <!-- mobile menu -->

        <button @click="emit('toggleSidebar')"
          class="md:hidden bg-white shadow-sm w-9 h-9 rounded-full flex items-center justify-center my-5">
          <i class="pi pi-bars text-sm"></i>
        </button>

        <div>
          <h1 class="text-lg md:text-xl font-bold  ">
            The Essentials.
          </h1>

          <p class="text-[11px] md:text-xs text-blue-500">
            Here's how your business is performing today
          </p>
        </div>

      </div>

      <!-- CENTER TABS -->

      <div class="hidden lg:flex items-center gap-5">
        <button class="p-1 rounded-full w-10 h-10 bg-white shadow-md">
          <i
            class="pi pi-objects-column text-sm hidden md:block text-[#0b86df] !flex items-center justify-center rounded-full w-[30px] h-[30px]"></i>
        </button>
        <div class="flex items-center bg-white shadow-md rounded-full p-0">

          <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)" :class="[
            'px-4 py-1 text-md rounded-full transition',
            activeTab === tab
              ? 'bg-[#0b86df] text-white'
              : 'text-gray-600 hover:bg-gray-100'
          ]">
            {{ tab }}
          </button>

        </div>

      </div>

      <!-- RIGHT -->

      <div class="flex  items-baseline gap-3 md:gap-4 lg:ms-0 ms-auto">

        <!-- date -->

        <div class="hidden sm:block bg-white rounded-full px-4 py-1 text-xs shadow-md font-semibold">
          Sep 25
        </div>

        <!-- desktop menu -->

        <button @click="emit('toggleSidebar')"
          class="hidden cursor-pointer md:flex  bg-[#0b86df] text-white w-8 h-8 min-w-8 min-h-8  rounded-full items-center justify-center shadow hover:bg-[#ff2c79] transition">
          <i class="pi pi-bars text-xs"></i>
        </button>

        <!-- icons -->

        <div class="bg-[#4499e3] shadow-sm rounded-b-2xl flex items-center gap-3 px-3 md:p-4 py-2 me-5">

          <i
            class="pi pi-bell text-white text-sm bg-[#0b86df] !flex items-center justify-center rounded-full w-[30px] h-[30px]"></i>

          <i
            class="pi pi-slack text-white text-sm hidden sm:block bg-[#0b86df] !flex items-center justify-center rounded-full w-[30px] h-[30px]"></i>

          <i
            class="pi pi-database text-white text-sm hidden md:block bg-[#0b86df] !flex items-center justify-center rounded-full w-[30px] h-[30px]"></i>

          <i
            class="pi pi-sparkles text-white text-sm bg-[#0b86df] !flex items-center justify-center rounded-full w-[30px] h-[30px]"></i>

        </div>

      </div>

    </div>

    <!-- MOBILE TABS -->

    <div class="lg:hidden px-4 pb-2 overflow-x-auto">

      <div class="flex items-center w-fit bg-white shadow-md rounded-full p-0 gap-2 min-w-max">

        <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)" :class="[
          'px-4 py-1 text-md rounded-full whitespace-nowrap transition',
          activeTab === tab
            ? 'bg-[#0b86df] text-white'
            : 'bg-white text-gray-600'
        ]">
          {{ tab }}
        </button>

      </div>

    </div>

  </header>
</template>