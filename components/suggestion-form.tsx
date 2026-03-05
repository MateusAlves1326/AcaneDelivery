"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function SuggestionForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://api.sheetmonkey.io/form/a1WpuJ3rc1fxpZe7YcmppD", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("Erro ao enviar")

      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setError(true)
      setTimeout(() => setError(false), 4000)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="sugestoes" className="relative py-20 md:py-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Quer participar do desenvolvimento do projeto?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Você pode nos ajudar com sugestões de magias ou perks — basta preencher
            abaixo com sua ideia que vamos avaliar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
              Seu nome
            </Label>
            <Input
              id="name"
              name="Nome"
              type="text"
              placeholder="Ex: João Silva"
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
              Seu E-mail
            </Label>
            <Input
              id="email"
              name="Email"
              type="email"
              placeholder="Ex: joao@email.com"
              required
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="idea" className="text-sm font-medium text-card-foreground">
              Sua Ideia
            </Label>
            <Textarea
              id="idea"
              name="Ideia"
              placeholder="Descreva sua sugestão de magia, perk ou mecânica..."
              rows={5}
              required
              className="resize-none bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          <Button
            type="submit"
            className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={submitting || submitted}
          >
            {submitted ? (
              "Enviado com sucesso!"
            ) : submitting ? (
              "Enviando..."
            ) : error ? (
              "Erro ao enviar. Tente novamente."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Enviar Sugestão
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
