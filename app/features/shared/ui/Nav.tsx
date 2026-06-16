"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gavel } from "lucide-react";

const links = [
  {
    href: "/card",
    label: "Card",
  },
  {
    href: "/form",
    label: "Form",
  },
] as const;

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="mx-auto w-full max-w-[1500px]">
      <div className="flex w-full items-center justify-between xl:px-10">
        <Link
          href="/card"
          className="
            flex items-center gap-2
            text-base font-medium text-black
            lg:text-2xl
          "
        >
          <Gavel size={18} aria-hidden="true" />
          <span>Adaptive UI Components</span>
        </Link>

        <nav aria-label="Component examples">
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-12">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      rounded-md border px-3 py-2
                      text-base transition-colors
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      lg:text-2xl

                      ${
                        isActive
                          ? "border-black bg-black text-white"
                          : "border-transparent hover:border-black/10 hover:bg-black/5"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
