'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import clsx from "clsx";
import { useState } from "react";

export default function DashboardGoals() {
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
    <div>
      <h2 className="text-2xl font-semibold">🎯 Suas metas</h2>
      <p className="text-muted-foreground">Gerencie e acompanhe suas metas de estudo.</p>

      <div className="flex gap-2 mt-4">
        <Button variant="default">➕ Criar nova meta</Button>
        <Button variant="outline">✅ Ver concluídas</Button>
      </div>

      <ul className="space-y-3 mt-6">
        {metas.map((meta) => (
          <li key={meta.id} className="flex items-center gap-3">
            <Checkbox
              id={`meta-${meta.id}`}
              className="w-5 h-5"
              checked={meta.concluido}
              onCheckedChange={() => toggleMeta(meta.id)}
            />
            <Label
              htmlFor={`meta-${meta.id}`}
              className={clsx("text-base", meta.concluido && "line-through text-muted-foreground")}

            >
              {meta.texto}
            </Label>
          </li>
        ))}
      </ul>
    </div>
  )
}