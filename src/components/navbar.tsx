import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-medium">
              Jack Rose
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/work"
                  className="hover:underline hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/fun"
                  className="hover:underline hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 transition-colors"
                >
                  Fun
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="hover:underline hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 transition-colors"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="rounded-full border border-black px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 transition-colors"
                >
                  Work with me
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-4"></div>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
