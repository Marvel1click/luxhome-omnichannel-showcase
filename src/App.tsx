import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "@/context/StoreContext";
import { StoreShell } from "@/components/StoreShell";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

const App = () => (
  <TooltipProvider>
    <BrowserRouter>
      <StoreProvider>
      <Toaster />
      <Sonner />
        <Routes>
          <Route element={<StoreShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections/:slug" element={<Collection />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
