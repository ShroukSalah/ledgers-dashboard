<script setup>
import { ref, computed } from "vue"
const revenueGrowth = ref(10)
const cosRevenue = ref(40)
const opexChange = ref(0)
const seasonality = ref(20)
const pipelineConfidence = ref(60)

/* function تعمل progress لأي slider */
const sliderProgress = (value, min, max) => {
  const percent = ((value - min) / (max - min)) * 100
  return {
    background: `linear-gradient(to right, #2563eb ${percent}%, #e5e7eb ${percent}%)`
  }
}

/* base data */
const revenue = 1250000
const netProfit = 650000
const opex = 600000
const margin = 52

/* calculations */

const adjustedRevenue = computed(() =>
  Math.round(revenue * (1 + revenueGrowth.value / 100))
)

const adjustedOpex = computed(() =>
  Math.round(opex * (1 + opexChange.value / 100))
)

const adjustedProfit = computed(() => {
  const cos = adjustedRevenue.value * (cosRevenue.value / 100)
  return Math.round(adjustedRevenue.value - cos - adjustedOpex.value)
})

const adjustedMargin = computed(() =>
  Math.round((adjustedProfit.value / adjustedRevenue.value) * 100)
)

const format = (v) => v.toLocaleString()
</script>

<template>
  <div class="bg-white rounded-2xl p-5 pb-0 shadow-md">

    <h3 class="font-bold  text-sm">
      Forecast & Budget Tuner
    </h3>

    <p class="text-xs   mb-4">
      Adjust revenue, COS, and OPEX assumptions to see profit scenarios live.
    </p>

    <!-- sliders -->

    <div class="grid grid-cols-3 gap-4 mb-5">

      <div>
        <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">Revenue Growth</label>
        <input type="range" min="-20" max="40" v-model="revenueGrowth" class="slider"
          :style="sliderProgress(revenueGrowth, -20, 40)" />
      </div>

      <div>
        <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">COS % of Revenue</label>
        <input type="range" min="10" max="80" v-model="cosRevenue" class="slider"
          :style="sliderProgress(cosRevenue, 10, 80)" />
      </div>

      <div>
        <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">Seasonality</label>
        <input type="range" min="0" max="100" v-model="seasonality" class="slider"
          :style="sliderProgress(seasonality, 0, 100)" />
      </div>

      <div>
        <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">Pipeline Confidence</label>
        <input type="range" min="0" max="100" v-model="pipelineConfidence" class="slider"
          :style="sliderProgress(pipelineConfidence, 0, 100)" />
      </div>

      <div>
        <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">OpEx Change</label>
        <input type="range" min="-20" max="40" v-model="opexChange" class="slider"
          :style="sliderProgress(opexChange, -20, 40)" />
      </div>

    </div>

    <!-- snapshot -->

    <div class="bg-gradient-to-r from-blue-600 to-blue-500 rounded-b-3xl text-white p-4 text-xs  snapShot-box">

      <div class="grid grid-cols-4 mb-2 font-semibold">
        <span>Output Snapshot</span>
        <span class="text-right">Current</span>
        <span class="text-right">Adjusted</span>
        <span class="text-right">Change</span>
      </div>

      <div class="space-y-1 text-[#000] font-medium">

        <div class="grid grid-cols-4">
          <span>Gross Profit</span>
          <span class="text-right">{{ format(revenue) }}</span>
          <span class="text-right">{{ format(adjustedRevenue) }}</span>
          <span class="text-right text-white">-</span>
        </div>

        <div class="grid grid-cols-4">
          <span>Net Profit</span>
          <span class="text-right">{{ format(netProfit) }}</span>
          <span class="text-right">{{ format(adjustedProfit) }}</span>
          <span class="text-right text-white">-</span>
        </div>

        <div class="grid grid-cols-4">
          <span>OpEx</span>
          <span class="text-right">{{ format(opex) }}</span>
          <span class="text-right">{{ format(adjustedOpex) }}</span>
          <span class="text-right text-white">-</span>
        </div>

        <div class="grid grid-cols-4">
          <span>Gross Margin</span>
          <span class="text-right">{{ margin }}%</span>
          <span class="text-right">{{ adjustedMargin }}%</span>
          <span class="text-right text-white">-</span>
        </div>

      </div>



    </div>
    <div class="text-center text-[10px] mt-2 gradient-text">
      Ledgers AI
    </div>
    <p class="text-xs  font-medium mt-3">
      These adjustments show how changes in revenue , costs , and spending can influence your profit .
    </p>
    <p class="text-xs  font-medium ">
      Raising revenue or lowering expenses generally improves your margins and supports healthier monthly results."
    </p>
    <div class="flex justify-center mt-4">
      <div class="generate-btn rounded-xl shadow transition px-[40px] py-2">
        <button class=" text-sm    gradient-text ">
          Generate  
        </button>
      </div>

    </div>

  </div>
</template>

<style scoped>
@reference "tailwindcss";

.slider {
  @apply w-full h-2 bg-gray-200 rounded-lg appearance-none;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 35px;
  height: 20px;
  background: white;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 2px #eeeeeed8;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
  cursor: pointer;
}

.snapShot-box {
  box-shadow: inset 0 0 20px 0px #00000061;
}

.gradient-text {
  font-size: 15px;
  background: linear-gradient(to right, #2cffa4 7%, #1d8cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}

.generate-btn {
  margin-bottom: -26px;
  background-color: #fff;
  height: 45px;
 box-shadow: inset 0 0 5px 1px #eee;
}
</style>