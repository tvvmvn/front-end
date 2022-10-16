import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div id="app" className="min-h-screen">
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </div>
);
