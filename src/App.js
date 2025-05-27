// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Footer";
import routes from "./approutes";
const { Content } = Layout;

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Content>
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
