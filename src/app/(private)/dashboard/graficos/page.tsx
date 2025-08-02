export default function DashboardGraphs() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">📊 Gráficos de Progresso</h2>

      {/* Tempo diário de estudo */}
      <section>
        <h3 className="text-lg font-medium mb-2 border-b ">Tempo de estudo diário (últimos 7 dias)</h3>
        {/* Chart 1 */}
      </section>

      {/* Metas concluídas */}
      <section>
        <h3 className="text-lg font-medium mb-2 border-b">Metas concluídas por dia</h3>
        {/* Chart 2 */}
      </section>

      {/* Streak */}
      <section>
        <h3 className="text-lg font-medium mb-2 border-b">Streak de estudo</h3>
        {/* Chart 3 */}
      </section>

      {/* Distribuição por categoria */}
      <section>
        <h3 className="text-lg font-medium mb-2 border-b">Distribuição por tema/assunto</h3>
        {/* Chart 4 */}
      </section>
    </div>
  )
}