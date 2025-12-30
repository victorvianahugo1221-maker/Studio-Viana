import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">
            404
          </h1>
          <p className="text-2xl font-semibold mb-3">Página não encontrada</p>
          <p className="text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe. Volte ao
            início e explore nossos serviços.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
