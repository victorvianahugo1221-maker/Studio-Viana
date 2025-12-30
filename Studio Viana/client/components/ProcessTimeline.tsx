const steps = [
  {
    number: "01",
    title: "Briefing",
    description:
      "Conversamos com você para entender suas necessidades, objetivos e visão do projeto.",
  },
  {
    number: "02",
    title: "Estratégia",
    description:
      "Desenvolvemos uma estratégia detalhada, cronograma e proposta personalizada.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Criamos protótipos e designs que refletem sua marca e melhor experiência do usuário.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description:
      "Construímos a solução com código limpo, seguro e otimizado para performance.",
  },
  {
    number: "05",
    title: "Testes",
    description:
      "Realizamos testes rigorosos em todos os dispositivos e navegadores para garantir qualidade.",
  },
  {
    number: "06",
    title: "Entrega",
    description:
      "Entregamos o projeto e fornecemos treinamento e documentação para sua equipe.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso Processo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seguimos uma metodologia clara e eficiente em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent transform translate-x-1/2" />
              )}

              {/* Card */}
              <div className="relative bg-card border border-border rounded-lg p-8 h-full">
                {/* Number badge */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
