<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue'
import KpiCard from '../dashboard/KpiCard.vue'
import ChartCard from '../dashboard/ChartCard.vue'
const revenueExpenseData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#1d8cf8',
      borderRadius: 8,
      data: [180, 650, 720, 540, 230, 190, 310, 250, 380, 690, 850, 800],
      // barPercentage: 0.6,
      // categoryPercentage: 0.5
    },
    {
      label: 'Expenses',
      backgroundColor: '#ff4d8d',
      borderRadius: 8,
      data: [560, 630, 820, 720, 700, 420, 540, 590, 720, 820, 900, 740],
      // barPercentage: 0.6,
      // categoryPercentage: 0.5
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
      data:[10, 55],
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
</script>

<template>
  <DashboardLayout>

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-9">
        <!-- KpiCard -->
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">
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
              :chartOptions="revenueExpenseOptions" height="h-[300px]" />
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
      </div>

    </div>

  </DashboardLayout>
</template>