
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import GrowthSolutions from "./pages/GrowthSolutions";
import StrategicSolutions from "./pages/StrategicSolutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CoreGrowthSolutions from "./pages/CoreGrowthSolutions";
import SpecializedGrowthSolutions from "./pages/SpecializedGrowthSolutions";
import SolvePathFramework from "./pages/SolvePathFramework";
import ExecutionModel from "./pages/ExecutionModel";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const queryClient = new QueryClient();

// Toggle this to true to enable maintenance mode
const MAINTENANCE_MODE = false;

const Maintenance = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <h1 className="text-4xl font-bold mb-4 text-primary">We'll be back soon!</h1>
    <p className="text-lg mb-8 text-muted-foreground">Our website is currently undergoing scheduled maintenance. Please check back later.</p>
    <img src="/images/Maintenance.png" alt="Maintenance" className="w-48 h-48 opacity-80" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <div className="min-h-screen bg-background text-foreground flex flex-col overflow-hidden">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="contact" element={<Contact />} />
                <Route path="growth-solutions" element={<GrowthSolutions />} />
                <Route path="strategic-solutions" element={<StrategicSolutions />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<Blog />} />
                <Route path="core-growth-solutions" element={<CoreGrowthSolutions />} />
                <Route path="specialized-growth-solutions" element={<SpecializedGrowthSolutions />} />
                <Route path="solvepath-framework" element={<SolvePathFramework />} />
                <Route path="execution-model" element={<ExecutionModel />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
