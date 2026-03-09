<script setup>
import { ref, onMounted } from "vue"

import DashboardLayout from '../layout/DashboardLayout.vue'
import KpiCard from '../dashboard/KpiCard.vue'
import ChartCard from '../dashboard/ChartCard.vue'
import ForecastTuner from '../dashboard/ForecastTuner.vue'
import CashFlowTuner from '../dashboard/CashFlowTuner.vue'

const chartRef = ref(null)

const revenueExpenseData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#1d8cf8',
      borderRadius: 8,
      data: [180, 650, 720, 540, 230, 190, 310, 250, 380, 690, 850, 800],
      // barPercentage: 0.6,
      categoryPercentage: 0.6,
    },
    {
      label: 'Expenses',
      backgroundColor: '#ff4d8d',
      borderRadius: 8,
      data: [560, 630, 820, 720, 700, 420, 540, 590, 720, 820, 900, 740],
      // barPercentage: 0.6,
      categoryPercentage: 0.6,
    }
  ]
}

const revenueExpenseOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false
    }
  },

  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        color: '#f1f5f9'
      }
    }
  }
}

const profitLossData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],

  datasets: [
    {
      data: [-20, -10, -25, -5, -40, 5, 10, 30, 25, 35],

      fill: true,
      tension: 0.45,
      borderWidth: 0,
      pointRadius: 4,

      pointBackgroundColor: '#ffffff',

      segment: {
        backgroundColor: ctx => {
          if (ctx.p0.parsed.y < 0 || ctx.p1.parsed.y < 0) {
            return 'rgba(255,77,141,0.6)'
          }
          return 'rgba(29,140,248,0.6)'
        }
      }
    }
  ]
}

const profitLossOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false
    }
  },

  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
}

const GoalCompletion = {
  labels: ['Rev', 'OpEx'],
  datasets: [
    {
      label: 'Rev',
      data: [10, 55],
      backgroundColor: '#ff4d8d',
      borderRadius: 20
    }, {
      label: 'OpEx',
      data: [40, 55],
      backgroundColor: '#1d8cf8',
      borderRadius: 20
    }

  ]
}

const GoalCompletionOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      stacked: true,
      beginAtZero: true,

      grid: {
        display: false,
        drawTicks: false,
        drawBorder: false,
        drawOnChartArea: false
      },
      ticks: {
        display: false
      },
      border: {
        display: false
      }
    },
    y: {
      stacked: true,
      grid: {

        display: false
      }
    }
  }
}
const cashFlowData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: "Outflow",
      data: [25, 10, 20, 8, 8, 35, 5, 18, 35, 22, 25, 35],
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 3,
          hoverRadius: 3
        }
      },
      borderColor: "#ff4d8d",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart
        if (!chartArea) return
        return createGradient(ctx, chartArea, "pink")
      },

      tension: 0.45,
      fill: true,

      pointRadius: 4,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#ff4d8d",
      pointBorderWidth: 2
    },
    {
      label: "Inflow",
      data: [70, 35, 55, 45, 50, 70, 40, 60, 75, 60, 65, 90],

      borderColor: "#1E88E5",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart
        if (!chartArea) return
        return createGradient(ctx, chartArea, "blue")
      },

      tension: 0.45,
      fill: true,

      pointRadius: 4,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#1E88E5",
      pointBorderWidth: 2
    }
  ]
}
const cashFlowOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: { display: false }
  },

  scales: {
    x: {
      grid: { display: false }
    },
    y: {
      display: false
    }
  },

  elements: {
    line: {
      borderWidth: 3
    }
  }
}
const cashBankData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      data: [15, 10, 22, 18, 25, 20, 17, 22, 12, 26],

      borderColor: '#5aa7ff',
      backgroundColor: 'rgba(90,167,255,0.15)',

      tension: 0.45,
      fill: true,

      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#5aa7ff',
      pointBorderWidth: 2
    }
  ]
}

const miniChartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },

  scales: {
    x: { display: false, },
    y: { display: false }
  },

  elements: {
    line: {
      borderWidth: 2
    }
  }
}
const netFlowData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      data: [12, 14, 10, 18, 20, 17, 9, -2, -10, 6],

      tension: 0.45,
      borderWidth: 2,

      segment: {
        borderColor: ctx => {
          if (ctx.p0.parsed.y < 0 || ctx.p1.parsed.y < 0)
            return '#ff4d8d'
          return '#5aa7ff'
        }
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 3,
          hoverRadius: 3
        }
      },
      pointRadius: 4,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,

      pointBorderColor: ctx => {
        return ctx.parsed.y < 0 ? '#ff4d8d' : '#5aa7ff'
      }
    }
  ]
}
const highlightPlugin = {
  id: "highlightArea",
  beforeDraw(chart) {
    const { ctx, chartArea } = chart

    if (!chartArea) return

    const width = chartArea.right - chartArea.left
    const highlightWidth = width * 0.25

    ctx.save()
    ctx.fillStyle = "rgba(30,136,229,0.15)"
    ctx.fillRect(
      chartArea.right - highlightWidth,
      chartArea.top,
      highlightWidth,
      chartArea.bottom - chartArea.top
    )
    ctx.restore()
  }
}
const createGradient = (ctx, chartArea, color) => {
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)

  if (color === "blue") {
    gradient.addColorStop(0, "rgba(30,136,229,0.7)")
    gradient.addColorStop(1, "rgba(30,136,229,0)")
  }

  if (color === "pink") {
    gradient.addColorStop(0, "rgba(255,77,141,0.7)")
    gradient.addColorStop(1, "rgba(255,77,141,0)")
  }

  return gradient
}
onMounted(() => {

  const chart = chartRef.value.chart
  const ctx = chart.ctx
  const h = chart.height

  const blue = ctx.createLinearGradient(0, 0, 0, h)
  blue.addColorStop(0, "rgba(30,136,229,0.8)")
  blue.addColorStop(1, "rgba(30,136,229,0)")

  const pink = ctx.createLinearGradient(0, 0, 0, h)
  pink.addColorStop(0, "rgba(255,77,141,0.8)")
  pink.addColorStop(1, "rgba(255,77,141,0)")

  chart.data.datasets[0].backgroundColor = pink
  chart.data.datasets[1].backgroundColor = blue

  chart.update()

})
</script>

<template>
  <DashboardLayout>

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-8">
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
              <ChartCard type="bar" title="Goal Completion" :chartData="GoalCompletion"
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
      <div class="col-span-4 bg-[#4499e3] rounded-2xl p-4">
        <ForecastTuner class="mb-4"/>
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