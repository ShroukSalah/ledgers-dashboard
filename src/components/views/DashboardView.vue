<script setup>
import DashboardLayout from '../layout/DashboardLayout.vue'
import KpiCard from '../dashboard/KpiCard.vue'
</script>

<template>
  <DashboardLayout>

    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-9">
        <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4 mb-6">

          <KpiCard title="Revenue" value="1400000" change="+4%" />
          <KpiCard title="Gross Profit" value="1250000" change="+14%" />
          <KpiCard title="Op.Expenses" value="600000" change="+34%" />
          <KpiCard title="Net Income" value="650000" change="-25%" />
          <KpiCard title="Cash in Bank" value="1700000" change="-25%" />
          <KpiCard title="Burn Rate" value="750000" change="-15%" />
          <KpiCard title="Runway" value="$40k" change="+4%" />

        </div>

      </div>

    </div>

  </DashboardLayout>
</template>