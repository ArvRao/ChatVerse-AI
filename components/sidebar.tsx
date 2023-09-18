"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation"
import { Home, Plus, Settings, FileText, UserCircle2, Globe } from "lucide-react";


export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const routes = [
        {
            icon: Home,
            href: "/home",
            label: "Home",
            pro: false,
        },
        {
            icon: Plus,
            href: "/chatversecharacter/new",
            label: "Create",
            pro: true,
        },
        {
            icon: FileText,
            href: "/analytics",
            label: "Analytics",
            pro: false,
        },
        // {
        //     icon: Globe,
        //     href: "/posts",
        //     label: "Posts",
        //     pro: false,
        // },
        // {
        //     icon: UserCircle2,
        //     href: "/account",
        //     label: "Account",
        //     pro: false,
        // },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings",
            pro: false,
        }
    ]

    const onNavigate = (url: string, pro: boolean) => {
        // check if PRO
        return router.push(url)

    }
    return (
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex flex-1 justify-center">
                <div className="space-y-2">
                    {routes.map((route) => (
                        <div 
                        onClick={() => onNavigate(route.href, route.pro)}
                        key={route.href}
                        className={cn(
                            "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                            pathname === route.href && "bg-primary/10 text-primary"
                        )}>
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5" />
                                {route.label}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}