"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="United Food logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            UNITED FOOD
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#servicos"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Serviços
          </a>
          <a
            href="#como-funciona"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Como Funciona
          </a>
          <a
            href="#sobre"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar Reunião
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground md:relative md:right-0 md:top-0 md:translate-y-0 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center gap-4 px-6 py-6 text-center">
            <a
              href="#servicos"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Serviços
            </a>
            <a
              href="#como-funciona"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Como Funciona
            </a>
            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar Reunião
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
