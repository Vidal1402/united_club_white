"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const services = [
  { image: "/images/1.png", alt: "Mídia Paga - Instagram, Facebook e iFood" },
  { image: "/images/2.png", alt: "Soluções Comerciais para restaurantes" },
  { image: "/images/3.png", alt: "Criativos e Vídeos para pedidos" },
  { image: "/images/4.png", alt: "Relatórios e Acompanhamento" },
  { image: "/images/5.png", alt: "Cardápio Digital" },
  { image: "/images/6.png", alt: "Disparo de Mensagens" },
  { image: "/images/7.png", alt: "Gestão e Atendimento" },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-12 lg:py-16">
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
          <div className="mx-auto mt-6 flex items-center justify-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
            <span className="inline-flex animate-pulse">←</span>
            <span>Arraste para o lado para ver todos</span>
            <span className="inline-flex animate-pulse">→</span>
          </div>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.alt}
                  className="pl-2 md:pl-4 basis-full max-w-4xl mx-auto"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg ring-1 ring-black/5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="h-full w-full object-contain object-center"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 rounded-full border-2 border-border bg-background/80 p-3 hover:bg-muted" />
              <CarouselNext className="static translate-y-0 rounded-full border-2 border-border bg-background/80 p-3 hover:bg-muted" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
