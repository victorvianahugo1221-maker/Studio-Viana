import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

interface ContactPageProps {
  onOpenProjectForm: () => void;
}

export default function ContactPage({ onOpenProjectForm }: ContactPageProps) {
  return (
    <Layout onOpenProjectForm={onOpenProjectForm}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aqui para responder suas dúvidas e discutir oportunidades
              de colaboração.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 border border-border rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">
                <a
                  href="mailto:contact@studioviana.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@studioviana.com
                </a>
              </p>
            </div>

            <div className="p-8 border border-border rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-muted-foreground">
                <a
                  href="tel:+551199999999"
                  className="hover:text-primary transition-colors"
                >
                  +55 (11) 9999-9999
                </a>
              </p>
            </div>

            <div className="p-8 border border-border rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-muted-foreground">
                Canaã dos Carajás, PA
                <br />
                Brasil
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">Siga-nos no Instagram</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/studioviana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Quick CTA */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tem uma ideia de projeto?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Clique abaixo para descrever seu projeto e começaremos a trabalhar
            em sua visão.
          </p>
          <button
            onClick={onOpenProjectForm}
            className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Iniciar Projeto
          </button>
        </div>
      </section>
    </Layout>
  );
}
