import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:py-32">
        {/* Content centralizado */}
        <div className="flex max-w-2xl flex-1 flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Vagas limitadas para novos parceiros
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">
              A maior assessoria de crescimento para restaurantes que querem{" "}
              <span className="text-primary">vender todos os dias</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Estratégias validadas em dezenas de restaurantes para escalar
            pedidos, aumentar faturamento e transformar marketing em vendas
            reais.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Agendar reunião estratégica
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap items-center gap-8 lg:gap-12">
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">
                +78
              </p>
              <p className="text-sm text-muted-foreground">
                Restaurantes atendidos
              </p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-3xl font-bold text-foreground">
                +600%
              </p>
              <p className="text-sm text-muted-foreground">
                Crescimento de parceiros
              </p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-3xl font-bold text-primary">
                #1
              </p>
              <p className="text-sm text-muted-foreground">
                Em resultados reais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
