import { TrendingUp, Award, Users } from "lucide-react"

export function SocialProof() {
  return (
    <section className="relative border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Resultados falam mais alto que{" "}
            <span className="text-primary">promessas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Restaurantes que aplicaram nossa metodologia cresceram acima de
            200% e até 300% durante a parceria.
          </p>
        </div>

        <div className="mt-16 grid gap-6 text-center md:grid-cols-3 md:text-left">
          <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30">
            <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 md:mx-0">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Crescimento Real
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Parceiros que escalaram de R$30 mil para mais de R$180 mil em
              faturamento mensal com nossas estratégias.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30">
            <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 md:mx-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Metodologia Validada
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Processos testados e aprovados em mais de 48 estabelecimentos de
              diferentes segmentos e regiões.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30">
            <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3 md:mx-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Equipe Especializada
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Time composto por gestores de alta performance focados
              exclusivamente no mercado de alimentação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
