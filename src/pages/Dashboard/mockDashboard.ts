export type DashboardMetrics = {
  concluidos: number
  emAndamento: number
  naoIniciados: number
  mediaAcertos: number
}

export type DashboardData = {
  progressoAtual: number
  metricas: DashboardMetrics
}

export const defaultDashboardData: DashboardData = {
  progressoAtual: 20,
  metricas: {
    concluidos: 1,
    emAndamento: 2,
    naoIniciados: 2,
    mediaAcertos: 40,
  },
}
