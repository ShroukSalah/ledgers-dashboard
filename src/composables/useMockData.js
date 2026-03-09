
import { ref } from "vue"

export function useMockData() {
    const revenueExpenseData = ref({
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
    })

    const profitLossData = ref({
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
    })

    const goalCompletionData = ref({
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
    })

    const cashFlowData = ref({
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
    })

    const cashBankData = ref({
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
    })

    const netFlowData = ref({
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
    })
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
    return {
        revenueExpenseData,
        profitLossData,
        goalCompletionData,
        cashFlowData,
        cashBankData,
        netFlowData
    }
}