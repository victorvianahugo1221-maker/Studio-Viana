import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Desenvolvimento Web",
    description: "Plataforma de e-commerce completa com integração de pagamento e gerenciamento de inventário.",
    image: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=400&h=300&fit=crop",
  },
  {
    title: "Brand Identity",
    category: "Design",
    description: "Identidade visual completa para startup de tecnologia incluindo logo, paleta de cores e guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
  {
    title: "Mobile App",
    category: "Desenvolvimento Mobile",
    description: "Aplicativo mobile nativo para gerenciamento de tarefas com sincronização em tempo real.",
    image: "https://images.unsplash.com/photo-1512941691920-25d184ca3df4?w=400&h=300&fit=crop",
  },
  {
    title: "Website Institucional",
    category: "Design Web",
    description: "Site responsivo e otimizado para SEO apresentando serviços de consultoria empresarial.",
    image: "https://images.unsplash.com/photo-1467232557127-c42f69b8b214?w=400&h=300&fit=crop",
  },
  {
    title: "Dashboard Analytics",
    category: "Desenvolvimento Web",
    description: "Dashboard interativo para análise de dados com gráficos em tempo real e exportação de relatórios.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    title: "UI/UX Design System",
    category: "Design",
    description: "Sistema de design completo com componentes reutilizáveis e documentação para equipes de desenvolvimento.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
