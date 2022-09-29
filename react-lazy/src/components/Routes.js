import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Home = React.lazy(() => import("../pages/Home"));

// lazy faz code split, fazendo com que o react quebre o bundle
const RoutesComponent = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="react-lazy">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default RoutesComponent;
