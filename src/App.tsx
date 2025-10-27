import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DomainPage from './pages/DomainPage';
import MilestonesPage from './pages/MilestonesPage';
import DocumentsPage from './pages/DocumentsPage';
import PresentationsPage from './pages/PresentationsPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'domain':
        return <DomainPage />;
      case 'milestones':
        return <MilestonesPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'presentations':
        return <PresentationsPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
