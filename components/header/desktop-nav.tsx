import Link from "next/link";
import { NavItem } from "@/types";

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="hidden md:flex items-center gap-7 ">
      {navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          target={navItem.target ? "_blank" : undefined}
          rel={navItem.target ? "noopener noreferrer" : undefined}
          className="transition-colors hover:text-foreground/80 text-foreground/60 text-lg font-light"
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
}
