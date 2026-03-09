<script setup>
defineProps({
    title: String,
    value: String,
    change: String
})
</script>

<template>
    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-xs hover:shadow-md transition transition-all duration-300 ease-out
           hover:-translate-y-1 hover:shadow-lg cursor-pointer">

        <p class="text-sm  font-medium">
            {{ title }}
        </p>

        <div class="mt-2  ">

            <h3 class="text-xl font-semibold text-gray-800
             transition-transform duration-300
             group-hover:scale-105">
                {{ value }}
            </h3>

            <span class="text-xs text-green-600 font-medium block text-end"
                :class="change.includes('-') ? 'text-pink-500' : 'text-blue-500'">
                {{ change }}
            </span>
            <span class="text-[.7rem] text-gray-400 font-semibold">
                vs previous month
            </span>
        </div>

    </div>
</template>