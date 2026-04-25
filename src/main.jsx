import { StrictMode } from "react";
import { HashRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Contract from "./Contract.jsx";
import WebEval from "./WebEval.jsx";
import Footer from "./Footer.jsx";
import Cards from "./Cards.jsx";
import Inventory from "./Inventory.jsx";
import Documentation from "./Documentation.jsx";
import Survey from "./Survey.jsx";
import Product from "./Product.jsx";
import Intro_form from "./Intro_form.jsx";
import Slideshow from "./Slideshow.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/website_evaluations" element={<WebEval />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/product" element={<Product />} />
          <Route path="/intro_form" element={<Intro_form />} />
          <Route path="/slideshow" element={<Slideshow />} />
        </Routes>
      </main>
      <Footer></Footer>
    </HashRouter>
  </StrictMode>,
);
