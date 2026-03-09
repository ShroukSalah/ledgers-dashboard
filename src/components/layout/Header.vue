<script setup>
import { ref } from "vue"

const tabs = ["Finance", "Sales", "HR", "MGMT"]
const activeTab = ref("Finance")
</script>

<template>
<header class="flex items-center justify-between px-6 py-4">

<!-- LEFT SIDE -->

<div>
<h1 class="text-xl font-semibold text-gray-800">
The Essentials.
</h1>

<p class="text-xs text-blue-500">
Here's how your business is performing today
</p>
</div>

<!-- CENTER NAV -->

<div class="flex items-center gap-4">

<div class="flex items-center bg-white shadow rounded-full p-1">

<button
v-for="tab in tabs"
:key="tab"
@click="activeTab = tab"
:class="[
'px-4 py-1 text-xs rounded-full transition',
activeTab === tab
? 'bg-blue-600 text-white'
: 'text-gray-600'
]"
>
{{ tab }}
</button>

</div>

</div>

<!-- RIGHT SIDE -->

<div class="flex items-center gap-4">

<!-- date -->

<div class="bg-white rounded-full px-4 py-1 text-xs shadow">
Sep 25
</div>

<!-- menu button -->

<button class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow">
<i class="pi pi-bars text-xs"></i>
</button>

<!-- icons -->

<div class="bg-white shadow rounded-full flex items-center gap-3 px-4 py-2">

<i class="pi pi-bell text-gray-600 text-sm"></i>
<i class="pi pi-slack text-gray-600 text-sm"></i>
<i class="pi pi-database text-gray-600 text-sm"></i>
<i class="pi pi-sparkles text-blue-600 text-sm"></i>

</div>

</div>

</header>
</template>