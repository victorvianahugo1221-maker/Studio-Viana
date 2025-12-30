import Layout from "@/components/Layout";
import ServicesGrid from "@/components/Services";

interface ServicesPageProps {
  onOpenProjectForm: () => void;
}

export default function ServicesPage({ onOpenProjectForm }: ServicesPageProps) {
  return (
    <Layout onOpenProjectForm={onOpenProjectForm}>
      {/* Hero Section for Services Page */}
      <section className="relative py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em design e desenvolvimento para
              transformar sua visão em realidade.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid without background */}
      <section className="py-20 md:py-32">
        <ServicesGrid />
      </section>

      {/* Detailed Services Info */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Como Trabalhamos
            </h2>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Análise & Conceituação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Começamos entendendo profundamente seus objetivos,
                    público-alvo e desafios. Realizamos pesquisa de mercado e
                    análise competitiva para criar a estratégia perfeita para
                    seu projeto.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Design & Prototipagem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossos designers criam interfaces visuais impactantes e
                    prototipam a experiência do usuário. Iteramos com feedback
                    para garantir a melhor solução antes da implementação.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Desenvolvimento & Execução
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos as tecnologias mais modernas para desenvolver
                    soluções robustas e escaláveis. Nosso código é limpo, bem
                    documentado e mantível para o futuro.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Teste & Entrega
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Realizamos testes rigorosos em todos os aspectos do projeto.
                    Entregamos com documentação completa e suporte para garantir
                    seu sucesso contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos transformar sua ideia em uma solução excepcional.
          </p>
          <button
            onClick={onOpenProjectForm}
            className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Iniciar Projeto Agora
          </button>
        </div>
      </section>
    </Layout>
  );
}
