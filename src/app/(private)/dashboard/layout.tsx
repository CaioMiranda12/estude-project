import { ReactNode } from "react";
import { DashboardSidebar } from "./_components/sidebar";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DashboardSidebar>
        {children}
      </DashboardSidebar>

    </>
  )
}