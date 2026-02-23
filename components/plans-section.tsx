"use client"

import { TrendingUp, Zap, Target } from "lucide-react"

export function PlansSection() {
  return (
    <section id="planos" className="border-y border-border/50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Coluna esquerda - texto */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Planos personalizados
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Ajuste a estratégia ao{" "}
              <span className="text-primary">momento do seu negócio</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
              Trabalhamos com pacotes adaptáveis. Você contrata de acordo com o
              estágio em que está hoje. O essencial é não parar de investir em
              ações que geram retorno real.
            </p>
            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-4 lg:mx-0">
              {[
                { icon: Target, text: "Planos que se encaixam no seu faturamento atual" },
                { icon: Zap, text: "Comece com o que faz sentido e escale depois" },
                { icon: TrendingUp, text: "Foco em táticas que já provaram resultado" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 lg:flex-row">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita - gráfico fictício de destaque */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted/30 p-6 shadow-xl ring-1 ring-black/5 lg:p-8">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Evolução típica de parceiros
                </span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                  Resultado
                </span>
              </div>
              <div className="relative h-64 w-full sm:h-72 lg:h-80">
                <svg
                  viewBox="0 0 400 200"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartFill"
                      x1="0"
                      y1="1"
                      x2="0"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient
                      id="chartLine"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="50%" stopColor="hsl(38, 92%, 55%)" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" />
                    </linearGradient>
                  </defs>
                  {/* Grid */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={40 + i * 40}
                      x2="400"
                      y2={40 + i * 40}
                      stroke="currentColor"
                      strokeDasharray="4 4"
                      className="stroke-border/60"
                    />
                  ))}
                  {/* Área preenchida (curva inferior) */}
                  <path
                    d="M 0 180 Q 60 160, 100 140 T 200 100 T 300 80 T 400 60 L 400 200 L 0 200 Z"
                    fill="url(#chartFill)"
                  />
                  {/* Linha principal (onda) */}
                  <path
                    d="M 0 160 Q 50 140, 100 120 T 200 80 T 300 50 T 400 40"
                    fill="none"
                    stroke="url(#chartLine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Pontos de destaque */}
                  {[
                    { x: 80, y: 130 },
                    { x: 160, y: 95 },
                    { x: 240, y: 65 },
                    { x: 320, y: 48 },
                    { x: 380, y: 42 },
                  ].map((p, i) => (
                    <g key={i}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r="6"
                        className="fill-primary stroke-background stroke-2"
                      />
                    </g>
                  ))}
                  {/* Marcadores decorativos */}
                  <rect x="62" y="98" width="32" height="32" rx="8" className="fill-primary/25 stroke-primary/50 stroke-[1.5]" />
                  <circle cx="78" cy="114" r="4" className="fill-primary" />
                  <rect x="187" y="48" width="32" height="32" rx="8" className="fill-primary/25 stroke-primary/50 stroke-[1.5]" />
                  <path d="M197 62 L203 58 L209 62 L203 66 Z" className="fill-primary" />
                  <rect x="297" y="18" width="36" height="32" rx="8" className="fill-primary/25 stroke-primary/50 stroke-[1.5]" />
                  <circle cx="315" cy="34" r="5" className="fill-primary" />
                </svg>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Crescimento ilustrativo · Dados reais na reunião estratégica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
