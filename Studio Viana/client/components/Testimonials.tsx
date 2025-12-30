import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Tech Startup",
    role: "CEO",
    content:
      "A Studio Viana transformou completamente nossa identidade visual. O trabalho foi profissional, criativo e entregue no prazo. Recomendo!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Marina Santos",
    company: "E-Commerce Brasil",
    role: "Diretora de Marketing",
    content:
      "O novo site desenvolvido pela Studio Viana aumentou nossas conversões em 40%. Excelente qualidade de código e design responsivo.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "João Oliveira",
    company: "Consultoria Empresarial",
    role: "Sócio",
    content:
      "A equipe foi muito dedicada, comunicativa e atenta aos detalhes. Entregaram um app mobile que superou nossas expectativas.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça a experiência de trabalhar com a Studio Viana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
