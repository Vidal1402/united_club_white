import { ArrowRight } from "lucide-react"

export function ExclusiveSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
          </div>

          <div className="relative flex flex-col items-center px-8 py-16 text-center lg:px-16 lg:py-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Exclusivo
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Nosso trabalho é{" "}
                <span className="text-primary">exclusivo</span>. Nem sempre
                abrimos vagas para novos parceiros.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Trabalhamos com poucos restaurantes para garantir foco total em
              crescimento, performance e resultado real. Cada parceiro recebe
              atenção dedicada da nossa equipe.
            </p>

            <a
              href="#contato"
              className="group mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Verificar disponibilidade
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
