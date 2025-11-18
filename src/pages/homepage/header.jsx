'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">🎓</span>
          </div>
          <span className="text-xl font-bold text-foreground">CampusEventHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#events" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
            Events
          </Link>
          <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
            Why Join
          </Link>
          <Link href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
            Universities
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Log In</Button>
          <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="flex flex-col gap-4 px-4 py-4">
            <Link href="#events" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Events
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Why Join
            </Link>
            <Link href="#partners" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Universities
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="w-full">Log In</Button>
              <Button className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
