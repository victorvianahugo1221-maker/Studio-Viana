import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import NotFound from "./pages/NotFound";
import ProjectForm from "@/components/ProjectForm";

const queryClient = new QueryClient();

const AppContent = () => {
  const [projectFormOpen, setProjectFormOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              onOpenProjectForm={() => setProjectFormOpen(true)}
              onCloseProjectForm={() => setProjectFormOpen(false)}
            />
          }
        />
        <Route
          path="/servicos"
          element={
            <ServicesPage onOpenProjectForm={() => setProjectFormOpen(true)} />
          }
        />
        <Route
          path="/contato"
          element={
            <ContactPage onOpenProjectForm={() => setProjectFormOpen(true)} />
          }
        />
        <Route
          path="/sobre"
          element={
            <AboutPage onOpenProjectForm={() => setProjectFormOpen(true)} />
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ProjectForm
        isOpen={projectFormOpen}
        onClose={() => setProjectFormOpen(false)}
      />
    </>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
