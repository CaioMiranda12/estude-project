'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"


export default function Dashboard() {
  const [metas, setMetas] = useState([
    { id: 1, texto: "Estudar React por 1h", concluido: false },
    { id: 2, texto: "Revisar algoritmos", concluido: false },
    { id: 3, texto: "Praticar 3 questões de lógica", concluido: false },
  ]);

  const toggleMeta = (id: number) => {
    setMetas((metasList) =>
      metasList.map((meta) =>
        meta.id === id ? { ...meta, concluido: !meta.concluido } : meta
      )
    );
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">Olá, Caio! 👋</h2>
        <p className="text-muted-foreground">Pronto para mais um dia de aprendizado?</p>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Ações rápidas</h3>
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Criar nova meta</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Meta</DialogTitle>
              </DialogHeader>
              {/* aqui entra o formulário */}
              <h1>Criar meta...</h1>
            </DialogContent>
          </Dialog>
          <Button variant="secondary">Adicionar tempo</Button>
          <Button variant="outline">Ver gráficos</Button>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Seu progresso</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Metas concluídas hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">3 de 5</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Streak atual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">12 dias 🔥</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tempo estudado hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">2h 30min</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Nível atual</h3>
        <Card>
          <CardHeader>
            <CardTitle>Nível 4</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={64} />
            <p className="text-sm text-muted-foreground mt-2">320 XP / 500 XP</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Metas de hoje</h3>
        <ul className="space-y-2">
          {metas.map((meta) => (
            <li key={meta.id} className="flex items-center gap-2">
              <Checkbox
                id={`meta-${meta.id}`}
                checked={meta.concluido}
                onCheckedChange={() => toggleMeta(meta.id)}
              />
              <Label
                htmlFor={`meta-${meta.id}`}
                className={`text-sm transition-all ${meta.concluido ? "line-through text-muted-foreground" : ""
                  }`}
              >
                {meta.texto}
              </Label>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Dica do dia 💡</h3>
        <Card>
          <CardContent className="text-sm italic pt-4">
            "Estudar um pouco todos os dias é melhor do que estudar tudo de uma vez."
          </CardContent>
        </Card>
      </section>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Recompensas próximas</h3>
        <Card>
          <CardHeader>
            <CardTitle>Ícone personalizado</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={70} />
            <p className="text-sm text-muted-foreground mt-2">700 XP / 1000 XP</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}