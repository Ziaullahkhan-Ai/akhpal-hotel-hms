import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');

  // Placeholder components for routes not fully implemented in this demo
  const Placeholder = ({ title }: { title: string }) => (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-300 mb-4">{title}</h2>
      <p className="text-gray-500">This module is under development for Akhpal Hotel System.</p>
    </div>
  );

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/admin" element={<Admin lang={lang} />} />
          <Route path="/rooms" element={<Placeholder title="Room Catalog" />} />
          <Route path="/services" element={<Placeholder title="Services Menu" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
