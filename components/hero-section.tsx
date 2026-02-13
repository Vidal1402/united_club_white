import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-12 lg:py-20">
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
              A maior assessoria de crescimento para o setor de Food Service que quer{" "}
              <span className="text-primary">vender todos os dias</span>.
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

          {/* Stats - coluna no celular para não cortar texto; linha no desktop */}
          <div className="mt-12 flex w-full max-w-md flex-col items-center gap-6 sm:max-w-none sm:flex-row sm:flex-nowrap sm:gap-8 lg:gap-12">
            <div className="flex min-w-0 flex-1 basis-0 flex-col items-center text-center sm:flex-shrink-0 sm:basis-auto">
              <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                +48
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Estabelecimentos atendidos
              </p>
            </div>
            <div className="hidden h-10 w-px flex-shrink-0 bg-border sm:block" />
            <div className="flex min-w-0 flex-1 basis-0 flex-col items-center text-center sm:flex-shrink-0 sm:basis-auto">
              <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                +300%
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Crescimento de parceiros
              </p>
            </div>
            <div className="hidden h-10 w-px flex-shrink-0 bg-border sm:block" />
            <div className="flex min-w-0 flex-1 basis-0 flex-col items-center text-center sm:flex-shrink-0 sm:basis-auto">
              <p className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                #1
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Em resultados reais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
