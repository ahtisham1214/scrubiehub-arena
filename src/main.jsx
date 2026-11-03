import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { CartProvider, WishlistProvider } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </StrictMode>,
);
