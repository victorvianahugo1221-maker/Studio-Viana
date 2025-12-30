import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual é o tempo médio de um projeto?",
    answer:
      "O tempo varia conforme a complexidade do projeto. Projetos simples de design levam 2-3 semanas, desenvolvimentos web podem levar 4-8 semanas. Fazemos um cronograma detalhado antes de iniciar.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim! Oferecemos suporte técnico para correções de bugs e pequenos ajustes. Também temos planos de manutenção mensal para atualizações e otimizações contínuas.",
  },
  {
    question: "Como é o processo de comunicação?",
    answer:
      "Mantemos contato regular através de reuniões semanais, relatórios de progresso e um canal dedicado para dúvidas. Você acompanha cada etapa do projeto em tempo real.",
  },
  {
    question: "Quais tecnologias vocês usam?",
    answer:
      "Utilizamos as mais modernas: React/Vue.js, Node.js, Python, PostgreSQL e ferramentas de design como Figma. Sempre escolhemos a melhor stack para cada projeto específico.",
  },
  {
    question: "Qual é a política de revisões?",
    answer:
      "Incluímos rodadas de revisão no escopo inicial do projeto. Mudanças significativas além do escopo acordado são ajustadas no cronograma e orçamento.",
  },
  {
    question: "Vocês trabalham com diferentes orçamentos?",
    answer:
      "Sim! Temos soluções para startups, pequenas e médias empresas. Oferecemos pacotes flexíveis e parcelamentos. Vamos ajustar a proposta ao seu orçamento disponível.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-secondary/30 transition-colors text-left"
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
