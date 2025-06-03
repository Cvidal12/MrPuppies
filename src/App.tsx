import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PuppiesPage from './pages/PuppiesPage';
import PuppyDetailPage from './pages/PuppyDetailPage';
import AdoptionPage from './pages/AdoptionPage';
import PaymentPage from './pages/PaymentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { PuppiesProvider } from './context/PuppiesContext';

function App() {
  return (
    <Router>
      <PuppiesProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/puppies" element={<PuppiesPage />} />
              <Route path="/puppies/:id" element={<PuppyDetailPage />} />
              <Route path="/adopt/:id" element={<AdoptionPage />} />
              <Route path="/payment/:id" element={<PaymentPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PuppiesProvider>
    </Router>
  );
}

export default App;