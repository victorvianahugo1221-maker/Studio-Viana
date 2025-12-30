interface HeroProps {
  onOpenProjectForm: () => void;
}

export default function Hero({ onOpenProjectForm }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with geometric pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F6ad11d63963146c0bf5b32bea71da896%2F1e25d30bd19a452f843cc415b95d616c?format=webp&width=1200')`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/20" />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6ad11d63963146c0bf5b32bea71da896%2Fb5802ba8563a45cfbcb7623905fb1765?format=webp&width=200"
              alt="Studio Viana Logo"
              className="h-32 w-32 md:h-40 md:w-40"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            <span className="text-primary">Studio Viana</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Design e Informática de Excelência
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Transformamos ideias em soluções visuais e tecnológicas inovadoras.
            Criatividade, expertise e paixão em cada projeto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Conhecer Serviços
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
