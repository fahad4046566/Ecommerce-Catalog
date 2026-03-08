import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Success from "./components/Success";
import Product from "./pages/Product"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path:"/product" , element : <Product/> },
      { path: "/about", element: <About /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      {path:"/success" ,element:<Success/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
   </StrictMode>,
);
