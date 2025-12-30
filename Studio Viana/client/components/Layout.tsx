import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  onOpenProjectForm: () => void;
}

export default function Layout({ children, onOpenProjectForm }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6ad11d63963146c0bf5b32bea71da896%2Fb5802ba8563a45cfbcb7623905fb1765?format=webp&width=100"
              alt="Studio Viana Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">Studio Viana</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link
              to="/servicos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contato
            </Link>
            <Link
              to="/sobre"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <button
              onClick={onOpenProjectForm}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Iniciar Projeto
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">
                Studio Viana
              </h3>
              <p className="text-muted-foreground">
                Design e Informática de excelência
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicos"
                    className="hover:text-primary transition-colors"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="hover:text-primary transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="mailto:contact@studioviana.com"
                    className="hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Studio Viana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
