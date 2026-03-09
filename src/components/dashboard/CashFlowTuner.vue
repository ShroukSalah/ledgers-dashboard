<script setup>
import { ref, computed } from "vue"

/* sliders */
const inflowSensitivity = ref(10)
const opexTightening = ref(5)
const paymentTerms = ref(20)

/* slider progress function */
const sliderProgress = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100
    return {
        background: `linear-gradient(to right, #2563eb ${percent}%, #e5e7eb ${percent}%)`
    }
}

/* base data */
const inflow = 1420000
const outflow = 540000
const netCash = 880000
const cashBalance = 58

/* calculations */

const adjustedInflow = computed(() =>
    Math.round(
        inflow *
        (1 + inflowSensitivity.value / 100) *
        (1 + paymentTerms.value / 200)
    )
)

const adjustedOutflow = computed(() =>
    Math.round(outflow * (1 - opexTightening.value / 100))
)

const adjustedNetCash = computed(() =>
    adjustedInflow.value - adjustedOutflow.value
)

const adjustedBalance = computed(() =>
    Math.round((adjustedNetCash.value / adjustedInflow.value) * 100)
)

const format = (v) => v.toLocaleString()
</script>

<template>
    <div class="bg-white rounded-2xl p-5 shadow-md">

        <h3 class="font-bold text-sm">
            Cash Flow Scenario Tuner
        </h3>

        <p class="text-xs mb-4">
            Adjust inflow, outflow, and operational levers to see instant impact on runway and cash position.
        </p>

        <!-- sliders -->

        <div class="grid grid-cols-3 gap-4 mb-5">

            <!-- Inflow -->
            <div>
                <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">
                    Inflow Sensitivity
                </label>

                <input type="range" min="-20" max="40" v-model="inflowSensitivity" class="slider"
                    :style="sliderProgress(inflowSensitivity, -20, 40)" />
            </div>

            <!-- OpEx -->
            <div>
                <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">
                    OpEx Tightening
                </label>

                <input type="range" min="0" max="30" v-model="opexTightening" class="slider"
                    :style="sliderProgress(opexTightening, 0, 30)" />
            </div>

            <!-- Payment Terms -->
            <div>
                <label class="text-xs font-medium pb-1 border-b block border-[#cdcdcd]">
                    Payment Terms
                </label>

                <input type="range" min="0" max="60" v-model="paymentTerms" class="slider"
                    :style="sliderProgress(paymentTerms, 0, 60)" />
            </div>

        </div>

        <!-- snapshot -->

        <div class="bg-gradient-to-r from-blue-600 to-blue-500 rounded-b-3xl text-white p-4 text-xs snapShot-box">

            <div class="grid grid-cols-4 mb-2 font-semibold">
                <span>Output Snapshot</span>
                <span class="text-right">Current</span>
                <span class="text-right">Adjusted</span>
                <span class="text-right">Change</span>
            </div>

            <div class="space-y-1 text-[#000] font-medium">

                <div class="grid grid-cols-4">
                    <span>Inflow</span>
                    <span class="text-right">{{ format(inflow) }}</span>
                    <span class="text-right">{{ format(adjustedInflow) }}</span>
                    <span class="text-right text-white">-</span>
                </div>

                <div class="grid grid-cols-4">
                    <span>Outflow</span>
                    <span class="text-right">{{ format(outflow) }}</span>
                    <span class="text-right">{{ format(adjustedOutflow) }}</span>
                    <span class="text-right text-white">-</span>
                </div>

                <div class="grid grid-cols-4">
                    <span>Net Cash Flow</span>
                    <span class="text-right">{{ format(netCash) }}</span>
                    <span class="text-right">{{ format(adjustedNetCash) }}</span>
                    <span class="text-right text-white">-</span>
                </div>

                <div class="grid grid-cols-4">
                    <span>Cash Balance</span>
                    <span class="text-right">{{ cashBalance }}%</span>
                    <span class="text-right">{{ adjustedBalance }}%</span>
                    <span class="text-right text-white">-</span>
                </div>

            </div>


        </div>
        <div class="text-center text-[10px] mt-2 gradient-text">
            Ledgers AI
        </div>

        <p class="text-xs  font-medium mt-3">
            "Adjusting inflow, outflow, and payment timing helps you see how your cash balance may shift month to month.
        </p>
        <p class="text-xs  font-medium ">
            Higher inflows or lighter spending usually support a stronger cash position." </p>
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
</style>