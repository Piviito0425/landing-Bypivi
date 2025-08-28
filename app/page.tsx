import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Code } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header>
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
            Bypivi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-[family-name:var(--font-dm-sans)]">
            Construyendo mediante vibe coding en público
          </p>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Documentando mi viaje en la programación y en la creación de productos digitales sin experiencia previa.
            Transparencia total
          </p>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Soy una persona que quiere aprender creando, experimentando y compartiendo cada paso del proceso.
          </p>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Si yo puedo hacerlo sin experiencia previa, tú también puedes.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a
              href="https://x.com/bypivi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir a Bypivi en X.com"
            >
              Sígueme en X.com
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </section>
      </header>

      <main>
        {/* Quién soy Section */}

        {/* Mis Proyectos Section */}
        <section className="px-4 py-16" aria-labelledby="mis-proyectos">
          <div className="max-w-6xl mx-auto">
            <h2
              id="mis-proyectos"
              className="text-3xl md:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]"
            >
              Proyectos
            </h2>
            <p className="text-center text-lg text-muted-foreground">
              Próximamente
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-4 py-8 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-muted-foreground">© 2025 Bypivi. Construido en público con transparencia total.</p>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">Esta web cumple con el RGPD y normativas europeas de protección de datos.</p>
            <p>
              No se recopilan datos personales | Sin cookies de seguimiento | Enlaces externos claramente identificados
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
