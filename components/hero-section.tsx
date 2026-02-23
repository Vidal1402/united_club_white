"use client"

import { useState } from "react"
import { ArrowRight, Video } from "lucide-react"

export function HeroSection() {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 py-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1fr,1.1fr] lg:gap-8 lg:py-16">
        {/* Coluna esquerda - texto */}
        <div className="flex flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Vagas limitadas para novos parceiros
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              A maior assessoria de crescimento para o setor de Food Service que quer{" "}
              <span className="text-primary">vender todos os dias</span>.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Estratégias validadas em dezenas de restaurantes para escalar
            pedidos, aumentar faturamento e transformar marketing em vendas
            reais.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-foreground bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted"
            >
              Falar com especialista
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Agendar reunião estratégica
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex flex-col">
              <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                +48
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Estabelecimentos atendidos
              </p>
            </div>
            <div className="h-10 w-px flex-shrink-0 bg-border" />
            <div className="flex flex-col">
              <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                +300%
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Crescimento de parceiros
              </p>
            </div>
            <div className="h-10 w-px flex-shrink-0 bg-border" />
            <div className="flex flex-col">
              <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                #1
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Em resultados reais
              </p>
            </div>
          </div>
        </div>

        {/* Coluna direita - vídeo vertical com cantos arredondados */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-2xl lg:max-w-[320px] lg:rounded-l-none lg:rounded-r-3xl">
            {videoError ? (
              <div className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-muted p-6 text-center lg:rounded-l-none lg:rounded-r-3xl">
                <Video className="h-12 w-12 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Coloque o arquivo <code className="rounded bg-border px-1 py-0.5 text-xs">img-5635_XKiZXKYb.mp4</code> em <code className="rounded bg-border px-1 py-0.5 text-xs">public/videos/</code>
                </p>
              </div>
            ) : (
              <video
                src="/videos/img-5635_XKiZXKYb.mp4"
                className="aspect-[9/16] w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => setVideoError(true)}
              >
                <source src="/videos/img-5635_XKiZXKYb.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
