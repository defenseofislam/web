// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Islam from "./pages/Islam";
import IslamComponent1 from "./components/Islam/IslamComponent1";
import Christianity from "./pages/Christianity";
import Judaism from "./pages/Judaism";
import Atheism from "./pages/Atheism";
import Agnosticism from "./pages/Agnosticism";
import Darwinism from "./pages/Darwinism";
import Hinduism from "./pages/Hinduism";
import AppFooter from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/Tos";
import IslamComponent2 from "./components/Islam/IslamComponent2";

const { Content } = Layout;

function App() {
  return (
    <Router basename="/web">
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/islam" element={<Islam />} />
            <Route path="/christianity" element={<Christianity />} />
            <Route path="/judaism" element={<Judaism />} />
            <Route path="/atheism" element={<Atheism />} />
            <Route path="/agnosticism" element={<Agnosticism />} />
            <Route path="/darwinism" element={<Darwinism />} />
            <Route path="/hinduism" element={<Hinduism />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/islam/1" element={<IslamComponent1 />} />
            <Route path="/islam/2" element={<IslamComponent2 />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
