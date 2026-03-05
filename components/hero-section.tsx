import Image from "next/image"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="conceito"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Subtle glow effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                Roguelike de Entregas
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Arcane Delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Arcane Delivery é um roguelike de ação em visão top-down onde você assume
              o papel de um entregador em um mundo pós-apocalíptico onde apenas uma
              coisa ainda funciona: as entregas mágicas. Trabalhando para uma guilda de
              restaurantes arcanos, sua missão é levar pedidos para clientes nada comuns
              — monstros, magos, demônios e outras criaturas que definitivamente não
              toleram atrasos.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Durante cada entrega, você atravessa uma cidade caótica e procedural
              enfrentando inimigos, explorando diferentes regiões e usando comidas
              mágicas instáveis como armas. O detalhe é que cada comida possui efeitos
              desconhecidos, e você só descobre o que ela faz ao utilizá-la pela primeira vez
              — podendo causar explosões devastadoras, teletransportes inesperados ou até
              efeitos totalmente imprevisíveis.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Com partidas rápidas, sistema de progressão, builds diferentes e muita
              descoberta a cada run, Arcane Delivery mistura combate intenso, humor e
              caos em uma corrida contra o tempo para completar entregas antes que os
              clientes percam a paciência... e se transformem em chefes furiosos.
            </p>
          </div>

          {/* Character images */}
          <div className="flex shrink-0 items-end gap-4 lg:flex-col lg:items-center lg:gap-6">
            <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5 md:h-48 md:w-48">
              <Image
                src="/images/wizard-dark.png"
                alt="Mago sombrio com cajado de chama azul"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-36 w-36 overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-accent/5 md:h-44 md:w-44">
              <Image
                src="/images/wizard-delivery.png"
                alt="Entregador mago com pizza flamejante e caixas de entrega"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative hidden h-40 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-primary/5 md:block md:h-48 md:w-48">
              <Image
                src="/images/wizard-blue.png"
                alt="Mago sombrio com chama azul e bau nas costas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
