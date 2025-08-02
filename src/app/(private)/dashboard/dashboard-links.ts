import {
  CalendarCheck,
  BarChart3,
  Medal,
  Gift,
  User,
  Target,
} from "lucide-react";

export const dashboardLinkGroups = [
  {
    title: "Painel",
    items: [
      {
        label: "Visão Geral",
        href: "/dashboard",
        icon: BarChart3,
      },
      {
        label: "Gráficos",
        href: "/dashboard/graficos",
        icon: CalendarCheck,
      },
    ],
  },
  {
    title: "Estudos",
    items: [
      {
        label: "Metas",
        href: "/dashboard/metas",
        icon: Target,
      },
      {
        label: "Nível",
        href: "/dashboard/nivel",
        icon: Medal,
      },
      {
        label: "Recompensas",
        href: "/dashboard/recompensas",
        icon: Gift,
      },
    ],
  },
  {
    title: "Minha Conta",
    items: [
      {
        label: "Usuário",
        href: "/dashboard/usuario",
        icon: User,
      },
    ],
  },
];
