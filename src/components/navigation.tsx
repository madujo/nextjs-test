"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className="flex sm:justify-center space-x-4">
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
};