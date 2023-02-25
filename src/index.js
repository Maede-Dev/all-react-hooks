import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/layout/Layout";
import Home from "./pages/components/home/Home";
import UseState from "./pages/components/useState/UseState";
import NoPage from "./pages/components/404/NoPge";
import UseReducer from "./pages/components/useReducer/UseReducer";
import UseEffect from "./pages/components/useEffect/UseEffect";
import RefTutorial from "./pages/components/UseRef/RefTutorial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="useState" element={<UseState />} />
        <Route path="UseReducer" element={<UseReducer />} />
        <Route path="UseEffect" element={<UseEffect />} />
        <Route path="RefTutorial" element={<RefTutorial />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
