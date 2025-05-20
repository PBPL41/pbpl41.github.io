
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPolicy from "./pages/AboutPolicy";
import WhyItMatters from "./pages/WhyItMatters";
import JoinCoalition from "./pages/JoinCoalition";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-policy" element={<AboutPolicy />} />
              <Route path="/why-it-matters" element={<WhyItMatters />} />
              <Route path="/coalition" element={<JoinCoalition />} />
              
              {/* City pages routes */}
              <Route path="/cities/boston" element={<NotFound />} />
              <Route path="/cities/los-angeles" element={<NotFound />} />
              <Route path="/cities/new-york" element={<NotFound />} />
              <Route path="/cities/portland" element={<NotFound />} />
              <Route path="/cities/san-francisco" element={<NotFound />} />
              <Route path="/cities/seattle" element={<NotFound />} />
              
              {/* These routes will be implemented in future iterations */}
              <Route path="/maps" element={<NotFound />} />
              <Route path="/media" element={<NotFound />} />
              <Route path="/events" element={<NotFound />} />
              <Route path="/contact" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
