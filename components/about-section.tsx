import { Users, Gamepad2, Wand2 } from "lucide-react"

const features = [
  {
    icon: Gamepad2,
    title: "Gameplay Caótico",
    description:
      "Partidas rápidas com sistema de progressão, builds diferentes e muita descoberta a cada run.",
  },
  {
    icon: Wand2,
    title: "Comidas Mágicas",
    description:
      "Cada comida possui efeitos desconhecidos — explosões devastadoras, teletransportes e mais.",
  },
  {
    icon: Users,
    title: "Clientes Exigentes",
    description:
      "Monstros, magos e demônios que não toleram atrasos e podem se transformar em chefes furiosos.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Sobre Nós
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Somos uma equipe indie apaixonada por roguelikes, humor e caos controlado.
            Arcane Delivery nasceu da ideia de misturar entregas de comida com combate
            mágico em um mundo onde tudo pode dar errado — e geralmente dá.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
