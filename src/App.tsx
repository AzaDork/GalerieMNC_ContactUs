import React from 'react';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main className="pt-40">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;