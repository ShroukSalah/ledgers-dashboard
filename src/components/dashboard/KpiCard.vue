<script setup>
defineProps({
    title: String,
    value: String,
    change: String
})
</script>

<template>
    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-xs hover:shadow-md transition">

        <p class="text-sm  font-medium">
            {{ title }}
        </p>

        <div class="mt-2  ">

            <h3 class="text-xl font-semibold">
                {{ value }}
            </h3>

            <span class="text-xs text-green-600 font-medium block text-end">
                {{ change }}
            </span>
            <span class="text-xs text-gray-400 font-semibold">
                vs previous month
            </span>
        </div>

    </div>
</template>