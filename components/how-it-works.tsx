import { ClipboardList, Phone, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Diagnóstico",
    description:
      "Você preenche o formulário e entendemos seu momento, faturamento e objetivos.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Reunião Estratégica",
    description:
      "Em até 8 horas, um especialista entra em contato para agendar uma reunião personalizada.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução e Crescimento",
    description:
      "Aplicamos estratégias validadas, acompanhamos métricas e escalamos resultados.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Um processo simples, direto e focado em resultados reais para o seu
            restaurante.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-6 lg:flex-row lg:gap-0 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content side */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "lg:pr-16 lg:text-right"
                        : "lg:pl-16 lg:text-left"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 ${
                        index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      } max-w-md`}
                    >
                      <span className="font-heading text-sm font-bold text-primary">
                        PASSO {step.number}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Empty side */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
