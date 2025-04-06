"use client";
import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Burger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Sliding Drawer */}
      <div
        className={`z-45 fixed top-0 right-0 h-screen w-64 bg-white/90 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6">
          <Link
            href="/work"
            className="py-3 text-lg hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/fun"
            className="py-3 text-lg hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Fun
          </Link>
          <Link
            href="/writing"
            className="py-3 text-lg hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className="mt-4 rounded-full border border-black px-4 py-2 text-center hover:bg-black hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Work with me
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 h-screen"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
