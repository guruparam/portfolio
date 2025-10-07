import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop.jsx";
import ErrorBoundary from "components/ErrorBoundary.jsx";
import NotFound from "pages/NotFound.jsx";
import Portfolio from './pages/portfolio/index.jsx';
import CertificationsPage from './pages/certifications/index.jsx';
import Experience from './pages/experience/index.jsx';
import Skills from './pages/skills/index.jsx';
import About from './pages/about/index.jsx';
import Homepage from './pages/homepage/index.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
