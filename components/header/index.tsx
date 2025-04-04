import Link from "next/link";
import Logo from "@/components/logo";
import MobileNav from "@/components/header/mobile-nav";
import DesktopNav from "@/components/header/desktop-nav";
import { ModeToggle } from "@/components/menu-toggle";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Classes",
    href: "/classes",
    target: false,
  },
  {
    label: "Instructors",
    href: "/Instructors",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-border/40 bg-background/95 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" aria-label="Home page">
          <Logo />
        </Link>
        <div className="hidden md:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
        </div>
        <div className="flex items-center md:hidden">
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
