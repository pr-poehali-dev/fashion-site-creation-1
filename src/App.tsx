
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Tshirts from "./pages/Tshirts";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Hoodies from "./pages/Hoodies";
import Jackets from "./pages/Jackets";
import Shorts from "./pages/Shorts";
import Caps from "./pages/Caps";
import Bags from "./pages/Bags";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <Cart />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/caps" element={<Caps />} />
            <Route path="/bags" element={<Bags />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;