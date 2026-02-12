"use client"

import React from "react"
import { useState } from "react"
import { ArrowRight, Shield, Mail, User, Phone, Building2 } from "lucide-react"

const inputBase =
  "w-full rounded-xl border-2 border-border bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder-muted-foreground outline-none transition-all focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"

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
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="relative py-12 lg:py-16">
      {/* Fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-border bg-card/80 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-0 lg:grid-cols-[1fr,1.1fr]">
              {/* Coluna esquerda - texto */}
              <div className="border-border bg-muted/30 p-8 lg:border-r lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mt-6 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Agende sua{" "}
                  <span className="text-primary">reunião estratégica</span>
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                  Preencha o formulário e um especialista entrará em contato em
                  até 8 horas para agendar sua reunião personalizada.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Preencha o formulário",
                      desc: "Conte sobre seu restaurante e objetivos.",
                    },
                    {
                      step: "2",
                      title: "Receba o contato",
                      desc: "Nossa equipe analisa e entra em contato rapidamente.",
                    },
                    {
                      step: "3",
                      title: "Comece a crescer",
                      desc: "Aplicamos as estratégias e escalamos seus resultados.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 font-heading text-sm font-bold text-primary">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna direita - formulário */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <User className="h-4 w-4 text-primary" />
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
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Phone className="h-4 w-4 text-primary" />
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
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Building2 className="h-4 w-4 text-primary" />
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
                      className={inputBase}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="segment"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Segmento
                    </label>
                    <select
                      id="segment"
                      name="segment"
                      required
                      value={formData.segment}
                      onChange={handleChange}
                      className={inputBase}
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
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Faturamento mensal
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formData.revenue}
                      onChange={handleChange}
                      className={inputBase}
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
                    className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-95 hover:shadow-primary/30"
                  >
                    Quero escalar meu restaurante
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 text-xs text-muted-foreground">
                    <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>
                      Seus dados estão 100% protegidos e serão usados apenas
                      para contato.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
