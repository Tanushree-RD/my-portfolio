"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "/", label: "home" },
    { href: "/experiments", label: "projects" },
    { href: "/blogs", label: "blogs" },
    { href: "/contact", label: "contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm font-[family-name:var(--font-jetbrains)]">
            <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/cat.gif"
                        alt="Home"
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                        priority
                    />
                </Link>

                {/* Navigation Links + Theme Toggle */}
                <div className="flex items-center gap-5">
                    <ul className="flex items-center gap-5">
                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`relative text-xs tracking-tight transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-foreground after:transition-all after:duration-300 after:ease-out ${isActive
                                            ? "text-foreground after:w-full"
                                            : "text-muted hover:text-foreground after:w-0 hover:after:w-full"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
