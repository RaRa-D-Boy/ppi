"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-white/10">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/industries"
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/partner-markets"
              className="text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Partner Markets
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors mt-4 bg-transparent"
              onClick={() => setIsOpen(false)}
            >
              GET IN TOUCH
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
