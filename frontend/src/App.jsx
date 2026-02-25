import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientPage from "./pages/ClientPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import Verify from "./verify/Verify";

function App() {
  return (
    <>

      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/client/:id" element={<ClientPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/e-verify" element={<Verify />} />
        <Route path="/e-verify/:id" element={<Verify />} />
      </Routes>
    </>

  );
}

export default App;