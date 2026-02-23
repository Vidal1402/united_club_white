"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    pergunta: "Como funciona o primeiro contato?",
    resposta:
      "Depois de preencher o formulário, nossa equipe analisa seu perfil e entra em contato em até 8 horas para agendar uma reunião estratégica. Na conversa, entendemos seu momento, faturamento e objetivos para propor o plano mais adequado.",
  },
  {
    pergunta: "Preciso ter um faturamento mínimo?",
    resposta:
      "Trabalhamos com restaurantes em diferentes estágios. Temos planos que se adaptam desde quem está começando a estruturar o marketing até quem já fatura bem e quer escalar ainda mais. O importante é ter vontade de crescer e disposição para aplicar as estratégias.",
  },
  {
    pergunta: "Quanto tempo leva para ver resultados?",
    resposta:
      "Cada caso é único, mas nossos parceiros costumam ver melhoras nas primeiras semanas em métricas como alcance e engajamento. Resultados mais sólidos de faturamento e pedidos costumam aparecer em alguns meses, com acompanhamento contínuo e ajustes conforme os dados.",
  },
  {
    pergunta: "Vocês atendem apenas restaurantes?",
    resposta:
      "Sim. Nosso foco é 100% em restaurantes, bares, lanchonetes, pizzarias e negócios de alimentação. Assim conseguimos aplicar metodologias e criativos já testados nesse segmento, com cases reais de crescimento.",
  },
  {
    pergunta: "Posso cancelar ou mudar de plano depois?",
    resposta:
      "Sim. Os planos são flexíveis. Você pode ajustar conforme sua condição atual — subir de pacote para ganhar mais suporte ou adequar em momentos de menor investimento. O objetivo é manter uma parceria que faça sentido para os dois lados.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tire suas dúvidas sobre a parceria e os planos.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-center text-base font-semibold hover:no-underline data-[state=open]:text-primary sm:text-left">
                {faq.pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-center text-muted-foreground sm:text-left">
                {faq.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
