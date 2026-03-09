<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue'
import KpiCard from '../dashboard/KpiCard.vue'
import ChartCard from '../dashboard/ChartCard.vue'
import ForecastTuner from '../dashboard/ForecastTuner.vue'
import CashFlowTuner from '../dashboard/CashFlowTuner.vue'
import { useCharts } from "../../composables/useCharts"

const {
  revenueExpenseData,
  profitLossData,
  goalCompletionData,
  cashFlowData,
  cashBankData,
  netFlowData,

  revenueExpenseOptions,
  profitLossOptions,
  GoalCompletionOptions,
  miniChartOptions,
  cashFlowOptions,

  highlightPlugin,
  createGradient
} = useCharts()

</script>

<template>
  <DashboardLayout>

    <div class="grid grid-cols-12 gap-6">
      <div class="lg:col-span-8 col-span-12">
        <!-- KpiCard -->
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-3 mb-6">
          <KpiCard title="Revenue" value="1400000" change="+4%" />
          <KpiCard title="Gross Profit" value="1250000" change="+14%" />
          <KpiCard title="Op.Expenses" value="600000" change="+34%" />
          <KpiCard title="Net Income" value="650000" change="-25%" />
          <KpiCard title="Cash in Bank" value="1700000" change="-25%" />
          <KpiCard title="Burn Rate" value="750000" change="-15%" />
          <KpiCard title="Runway" value="$40k" change="+4%" />
        </div>
        <!-- ChartCard  -->
        <div class="grid grid-cols-12 gap-6">
          <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-12 lg:col-span-8">
            <ChartCard type="bar" title="Revenue vs Expenses" :chartData="revenueExpenseData"
              :chartOptions="revenueExpenseOptions" height="h-[300px]" :plugins="[highlightPlugin]" />
            <p class="text-xs text-gray-400 mt-3 ps-15 font-medium">
              ✨ Losses in March and April driven by seasonality + marketing spikes
            </p>
          </div>
          <div class=" col-span-12 lg:col-span-4">
            <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit mb-5">
              <ChartCard title="Profit / Loss" type="line" :chartData="profitLossData" :chartOptions="profitLossOptions"
                height="h-32" />
            </div>
            <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm   h-fit ">
              <ChartCard type="bar" title="Goal Completion" :chartData="goalCompletionData"
                :chartOptions="GoalCompletionOptions" height="h-32" />
            </div>
          </div>


        </div>
        <div class="grid grid-cols-12 gap-6 mt-5 bg-[#4499e3] rounded-2xl p-4">
          <div class="bg-white  rounded-2xl border border-gray-100 shadow-sm col-span-12 lg:col-span-7 cashChart">
            <ChartCard type="line" title="Cash Inflow vs outflow" :chartData="cashFlowData"
              :chartOptions="cashFlowOptions" height="h-[280px]" :plugins="[highlightPlugin]" />

          </div>
          <div class=" col-span-12 lg:col-span-5">
            <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm h-fit mb-5">

              <ChartCard type="line" title="Cash in Bank" :chartData="cashBankData" :chartOptions="miniChartOptions"
                height="h-28" :plugins="[highlightPlugin]" />
            </div>
            <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm   h-fit ">
              <ChartCard type="line" title="NetFlow" :chartData="netFlowData" :chartOptions="miniChartOptions"
                height="h-28" :plugins="[highlightPlugin]" />
            </div>
          </div>


        </div>
      </div>
      <div class="lg:col-span-4 col-span-12 bg-[#4499e3] rounded-2xl p-4">
        <ForecastTuner class="mb-4" />
        <CashFlowTuner />

      </div>
    </div>

  </DashboardLayout>
</template>

<style>
.cashChart h3 {
  padding: 15px;
}
</style>