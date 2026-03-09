import { useMockData } from "./useMockData"

/* gradients */

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

/* highlight area plugin */

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

export function useCharts() {

    const {
        revenueExpenseData,
        profitLossData,
        goalCompletionData,
        cashFlowData,
        cashBankData,
        netFlowData
    } = useMockData()

    /* chart options */

    const revenueExpenseOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { color: "#f1f5f9" } }
        }
    }

    const profitLossOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }

    const goalCompletionOptions = {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                ticks: { display: false }
            },
            y: {
                stacked: true,
                grid: { display: false }
            }
        }
    }

    const miniChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }

    const cashFlowOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false } },
            y: { display: false }
        }
    }

    return {
        revenueExpenseData,
        profitLossData,
        goalCompletionData,
        cashFlowData,
        cashBankData,
        netFlowData,

        revenueExpenseOptions,
        profitLossOptions,
        goalCompletionOptions,
        miniChartOptions,
        cashFlowOptions,

        highlightPlugin,
        createGradient
    }
}