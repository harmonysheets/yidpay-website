import React from 'react';
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
