"use-client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

interface SidebarItemProps{
    icon: LucideIcon;
    label: string;
    href: string;
}

export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = 
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith('${href}/');

    const onClick = () => {
        router.push(href);
    }
    return (
        <button
        onClick={onClick}
        type="button"
        className={cn}
        >

        </button>
    )
}