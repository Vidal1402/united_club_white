"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, Shield } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    segment: "",
    revenue: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="border-t border-border/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left content */}
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Agende sua{" "}
              <span className="text-primary">reunião estratégica</span>
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
              Preencha o formulário abaixo e um especialista entrará em contato
              em até 8 horas para agendar sua reunião personalizada.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    Preencha o formulário
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nos conte sobre seu restaurante e seus objetivos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    Receba o contato
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe analisa e entra em contato rapidamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-heading text-sm font-bold text-primary">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    Comece a crescer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aplicamos as estratégias e escalamos seus resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 lg:p-10"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nome do restaurante
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome do seu restaurante"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="segment"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Segmento
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    required
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Selecione o segmento
                    </option>
                    <option value="hamburgueria">Hamburgueria</option>
                    <option value="pizzaria">Pizzaria</option>
                    <option value="restaurante-a-la-carte">
                      Restaurante à la carte
                    </option>
                    <option value="lanchonete">Lanchonete</option>
                    <option value="padaria">Padaria/Confeitaria</option>
                    <option value="comida-japonesa">Comida Japonesa</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="revenue"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Faturamento mensal
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Selecione a faixa
                    </option>
                    <option value="ate-30k">Até R$30.000</option>
                    <option value="30k-60k">R$30.000 - R$60.000</option>
                    <option value="60k-100k">R$60.000 - R$100.000</option>
                    <option value="100k-200k">R$100.000 - R$200.000</option>
                    <option value="acima-200k">Acima de R$200.000</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Quero escalar meu restaurante
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5" />
                <span>
                  Seus dados estão 100% protegidos e serão usados apenas para
                  contato.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
