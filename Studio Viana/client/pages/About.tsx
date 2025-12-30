import Layout from "@/components/Layout";
import { Target, Users, Zap } from "lucide-react";

interface AboutPageProps {
  onOpenProjectForm: () => void;
}

export default function AboutPage({ onOpenProjectForm }: AboutPageProps) {
  return (
    <Layout onOpenProjectForm={onOpenProjectForm}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a Studio Viana
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma agência jovem e criativa especializada em design e
              desenvolvimento de soluções digitais inovadoras para impulsionar
              seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Nossa História</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Studio Viana é uma agência jovem e dinâmica nascida da paixão
                por criar experiências visuais e tecnológicas que transformam
                ideias em realidade. Somos um time dedicado de designers e
                desenvolvedores que acredita que o design e a tecnologia podem
                fazer a diferença na vida das empresas e seus clientes.
              </p>
              <p>
                Embora sejamos uma empresa recente, trazemos consigo expertise e
                determinação em resolver problemas reais através de design
                inteligente e desenvolvimento robusto. Nossa juventude é nossa
                força – estamos sempre atualizados com as últimas tendências,
                tecnologias e melhores práticas do mercado digital.
              </p>
              <p>
                Começamos com uma visão clara: oferecer serviços de design e
                desenvolvimento de qualidade excepcional, acessíveis e
                personalizados. Cada cliente é importante para nós, e cada
                projeto é uma oportunidade de crescer, aprender e entregar
                resultados que realmente importam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar ideias em soluções visuais e tecnológicas que
                impulsionam o crescimento e sucesso de nossos clientes.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a agência mais inovadora e confiável em design e
                desenvolvimento digital, conhecida pela excelência e
                criatividade.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criatividade, integridade, colaboração, excelência e inovação.
                Esses princípios guiam tudo o que fazemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por Que Trabalhar Conosco
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expertise Comprovada</h3>
                <p className="text-muted-foreground">
                  Embora sejamos recentes, nosso time traz experiência sólida em
                  design e desenvolvimento com portfolio de projetos
                  bem-sucedidos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Abordagem Personalizada
                </h3>
                <p className="text-muted-foreground">
                  Cada projeto é único. Desenvolvemos soluções customizadas que
                  se adequam perfeitamente às suas necessidades e orçamento.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comunicação Clara</h3>
                <p className="text-muted-foreground">
                  Mantemos você atualizado em cada etapa do projeto com
                  transparência total e feedback constante durante todo o
                  processo.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tecnologia Moderna</h3>
                <p className="text-muted-foreground">
                  Utilizamos as mais recentes tecnologias e melhores práticas do
                  mercado para garantir qualidade e longevidade de seus
                  projetos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3>
                <p className="text-muted-foreground">
                  Não paramos na entrega. Oferecemos suporte e manutenção para
                  garantir que seu projeto funcione perfeitamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Without gradient background */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos prontos para transformar sua ideia em uma solução
            excepcional.
          </p>
          <button
            onClick={onOpenProjectForm}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Iniciar Projeto
          </button>
        </div>
      </section>
    </Layout>
  );
}
