interface CallToActionProps {
  onOpenProjectForm: () => void;
}

export default function CallToAction({ onOpenProjectForm }: CallToActionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar sua visão?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conversamos sobre suas necessidades e criamos uma solução única e
          personalizada para seu projeto.
        </p>
        <button
          onClick={onOpenProjectForm}
          className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Iniciar Projeto
        </button>
      </div>
    </section>
  );
}
