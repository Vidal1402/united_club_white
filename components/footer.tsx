import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="United Food logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-heading text-sm font-bold tracking-tight text-foreground">
              UNITED FOOD
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Serviços
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Como Funciona
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} United Food. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
