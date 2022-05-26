import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hooks from './routes/Hooks'
import Utilities from "./routes/Utilities";
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

  const root = ReactDOM.createRoot(
    document.getElementById("root")!
  );
  root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Hooks" element={<Hooks />} />
      <Route path="/Utilities" element={<Utilities />} />
    </Routes>
  </BrowserRouter>
  );