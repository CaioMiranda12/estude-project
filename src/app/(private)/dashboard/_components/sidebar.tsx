'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import clsx from "clsx";
import { CalendarCheck, ChevronLeft, ChevronRight, List } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dashboardLinkGroups } from "../dashboard-links";

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full">

      <aside
        className={clsx('flex flex-col border-r bg-background transition-all duration-300 p-4 h-full', {
          'w-20': isCollapsed,
          'w-64': !isCollapsed,
          'hidden md:flex md:fixed': true
        })}
      >
        <div className="mb-6 mt-4">
          {!isCollapsed && (
            <h1 className="text-lg font-bold">Estudar+</h1>
          )}
        </div>


        <Button
          className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? <ChevronLeft className="w-12 h-12" /> : <ChevronRight className="w-12 h-12" />}
        </Button>

        {isCollapsed && (
          <nav className="flex flex-col gap-1 overflow-hidden mt-2">
            {dashboardLinkGroups.map((group) => (
              <div key={group.title}>
                {group.items.map((item) => (
                  <SidebarLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    pathname={pathname}
                    isCollapsed={isCollapsed}
                    icon={<item.icon className="w-6 h-6" />}
                  />
                ))}
              </div>
            ))}
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              {dashboardLinkGroups.map((group) => (
                <div key={group.title}>
                  <span className="text-sm text-gray-400 font-medium mt-4 uppercase">
                    {group.title}
                  </span>
                  {group.items.map((item) => (
                    <SidebarLink
                      key={item.href}
                      href={item.href}
                      label={item.label}
                      pathname={pathname}
                      isCollapsed={isCollapsed}
                      icon={<item.icon className="w-6 h-6" />}
                    />
                  ))}
                </div>
              ))}

            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>


      <div className={clsx('flex flex-col flex-1 transition-all duration-300', {
        'md:ml-20': isCollapsed,
        'md:ml-64': !isCollapsed
      })}>
        <header className="md:hidden flex items-center justify-between borber-b px-2 h-14 z-10 sticky top-0 bg-white">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className="md:hidden"
                  onClick={() => setIsCollapsed(false)}
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu Estudar+
              </h1>
            </div>
            <SheetContent
              side="right"
              className="max-w-xs text-black p-4 gap-0"
            >
              <SheetHeader>
                <SheetTitle>Estudar+</SheetTitle>
                <SheetDescription>
                  Menu administrativo
                </SheetDescription>

                <nav className="grid gap-2 text-base pt-5">
                  {dashboardLinkGroups.map((group) => (
                    <div key={group.title}>
                      <span className="text-sm text-gray-400 font-medium mt-4 uppercase">
                        {group.title}
                      </span>
                      {group.items.map((item) => (
                        <SidebarLink
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          pathname={pathname}
                          isCollapsed={isCollapsed}
                          icon={<item.icon className="w-6 h-6" />}
                        />
                      ))}
                    </div>
                  ))}
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 py-4 px-2 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

interface SidebarLinksProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  pathname: string;
  isCollapsed: boolean;
}

function SidebarLink({ href, icon, isCollapsed, label,
  pathname
}: SidebarLinksProps) {
  return (
    <Link href={href}>
      <div
        className={clsx('flex items-center gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer', {
          'text-white bg-blue-500': pathname === href,
          'text-gray-700 hover:bg-gray-100': pathname !== href
        })}
      >
        <span>{icon}</span>
        {!isCollapsed && <label>{label}</label>}
      </div>
    </Link>
  )
}