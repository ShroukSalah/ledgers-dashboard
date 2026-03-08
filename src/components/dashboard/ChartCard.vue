<script setup>
defineProps({
    type: String,
    title: String,
    chartData: Object,
    chartOptions: Object,
    height: {
    type: String,
     
  }
})
</script>

<template>
    <div class=" ">

        <h3 class="text-sm font-semibold text-gray-700 mb-4">
            {{ title }}
        </h3>

        <Chart :type="type" :data="chartData" :options="chartOptions" ref="canvas" :class="height" />

    </div>
</template>