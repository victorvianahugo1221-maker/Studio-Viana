import { Palette, Code2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Criativo",
    description:
      "Criamos identidades visuais impactantes e interfaces que encantem. De branding a UI/UX, sua marca merece o melhor.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Soluções tecnológicas robustas e escaláveis. Desenvolvemos aplicações web, mobile e sistemas personalizados.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria",
    description:
      "Orientamos seu projeto desde a concepção até a execução. Estratégia, planejamento e expertise técnica integrados.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em design e desenvolvimento para levar
            seu negócio ao próximo nível.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 border border-border rounded-lg hover:border-primary/50 transition-colors group"
              >
                <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
