"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const services = [
  {
    title: "Mídia Paga",
    titleAccent: "PAGA",
    image: "/images/1.png",
    alt: "Dashboard de mídia paga com Instagram, Facebook e iFood",
    items: [
      "Gestão de campanhas no Instagram, Facebook e iFood",
      "Anúncios focados em intenção real de compra",
      "Estratégias para transformar desconhecidos em clientes recorrentes",
    ],
  },
  {
    title: "Soluções Comerciais",
    titleAccent: "COMERCIAIS",
    image: "/images/2.png",
    alt: "Soluções de marketing digital para restaurantes",
    items: [
      "Roteiros, métodos e processos para aumentar pedidos e reservas",
      "Treinamento de equipe para vender mais no salão, balcão e WhatsApp",
    ],
  },
  {
    title: "Criativos & Vídeos",
    titleAccent: "VÍDEOS",
    image: "/images/3.png",
    alt: "Criativos de vídeo para restaurantes mostrando um hambúrguer gourmet",
    items: [
      "Vídeos pensados para gerar pedidos",
      "Criativos testados e validados em +78 restaurantes",
      "Conteúdos focados em conversão, não em likes",
    ],
  },
  {
    title: "Relatórios e Acompanhamento",
    titleAccent: "ACOMPANHAMENTO",
    image: "/images/4.png",
    alt: "Dashboard de relatórios e acompanhamento de indicadores",
    items: [
      "Análise semanal de indicadores do seu restaurante",
      "Reuniões estratégicas de alinhamento",
      "Total clareza sobre desempenho e crescimento",
    ],
  },
  {
    title: "Cardápio Digital",
    titleAccent: "DIGITAL",
    image: "/images/5.png",
    alt: "Cardápio digital estratégico em dispositivos móveis",
    items: [
      "Organização completa do menu digital",
      "Estratégias de aumento de ticket médio",
      "Hierarquia visual, destaques e campanhas temáticas",
    ],
  },
  {
    title: "Disparo de Mensagens",
    titleAccent: "MENSAGENS",
    image: "/images/6.png",
    alt: "Disparo de mensagens inteligentes via WhatsApp",
    items: [
      "Promoções automáticas via WhatsApp",
      "Recuperação de clientes inativos",
      "Aumento de recompra e recorrência",
    ],
  },
  {
    title: "Gestão e Atendimento",
    titleAccent: "ATENDIMENTO",
    image: "/images/7.png",
    alt: "Gestão e atendimento estratégico para restaurantes",
    items: [
      "Estratégias personalizadas para cada restaurante",
      "Equipe supervisionada por gestores de alta performance",
      "Crescimento sustentável e previsível",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            O que fazemos pelo seu{" "}
            <span className="text-primary">restaurante</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Uma suíte completa de soluções para escalar seu faturamento e
            transformar seu restaurante em referência.
          </p>
          <p className="mx-auto mt-2 text-sm text-muted-foreground/80">
            Arraste para o lado para ver todos os serviços
          </p>
        </div>

        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {services.map((service) => (
                <CarouselItem
                  key={service.title}
                  className="pl-4 md:pl-6 basis-full sm:basis-[85%] md:basis-[70%] lg:basis-[45%] xl:basis-[380px]"
                >
                  <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 h-full flex flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden flex-shrink-0">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-xl font-bold tracking-tight text-foreground md:text-2xl">
                        {service.title.replace(service.titleAccent, "")}{" "}
                        <span className="text-primary">
                          {service.titleAccent}
                        </span>
                      </h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <svg
                              className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
