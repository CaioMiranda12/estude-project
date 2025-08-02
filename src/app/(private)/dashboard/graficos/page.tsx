"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const estudoDiario = [
  { dia: "Seg", minutos: 30 },
  { dia: "Ter", minutos: 50 },
  { dia: "Qua", minutos: 40 },
  { dia: "Qui", minutos: 60 },
  { dia: "Sex", minutos: 20 },
  { dia: "Sáb", minutos: 0 },
  { dia: "Dom", minutos: 80 },
]

const metasConcluidas = [
  { dia: "Seg", metas: 2 },
  { dia: "Ter", metas: 3 },
  { dia: "Qua", metas: 1 },
  { dia: "Qui", metas: 4 },
  { dia: "Sex", metas: 2 },
  { dia: "Sáb", metas: 0 },
  { dia: "Dom", metas: 5 },
]

const streak = [
  { dia: "Seg", ativo: true },
  { dia: "Ter", ativo: true },
  { dia: "Qua", ativo: true },
  { dia: "Qui", ativo: false },
  { dia: "Sex", ativo: true },
  { dia: "Sáb", ativo: true },
  { dia: "Dom", ativo: true },
]

const distribuicaoTemas = [
  { tema: "React", tempo: 120 },
  { tema: "Algoritmos", tempo: 90 },
  { tema: "CSS", tempo: 60 },
  { tema: "SQL", tempo: 30 },
]

const cores = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"]

export default function DashboardGraphics() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">📊 Gráficos de Progresso</h2>
        <p className="text-muted-foreground">Veja seu desempenho ao longo da semana.</p>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Tempo de estudo diário (últimos 7 dias)</h3>
        <div className="w-full h-[300px] bg-white border rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={estudoDiario}>
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="minutos" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Metas concluídas por dia</h3>
        <div className="w-full h-[300px] bg-white border rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metasConcluidas}>
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="metas" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Streak de estudo</h3>
        <div className="w-full bg-white border rounded-lg p-4">
          <div className="flex justify-center gap-4">
            {streak.map((dia, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className={`w-6 h-6 rounded ${dia.ativo ? "bg-blue-500" : "bg-gray-300"}`}
                  title={dia.dia}
                ></div>
                <span className="text-xs text-muted-foreground">{dia.dia}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-2">Distribuição por tema/assunto</h3>
        <div className="w-full bg-white border rounded-lg p-4 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribuicaoTemas}
                  dataKey="tempo"
                  nameKey="tema"
                  outerRadius={100}
                  label
                >
                  {distribuicaoTemas.map((entry, index) => (
                    <Cell key={entry.tema} fill={cores[index % cores.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center gap-2">
            {distribuicaoTemas.map((entry, index) => (
              <div key={entry.tema} className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: cores[index % cores.length] }}
                ></span>
                <span className="text-sm text-gray-700">{entry.tema}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
