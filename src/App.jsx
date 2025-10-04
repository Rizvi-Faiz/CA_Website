import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/navbar";
import Nav from './components/prenavbar';
import Carousel from "./components/slider";
import N from './components/newsletter';
import Footer from './components/footer';
import EVisitingCard from './components/EvisitingCard';
import QueryForm from './components/form';
import ServicesPage from './components/Services';
import HomeServices from './components/HomeServices'; // New import
import CalculatorHub from './components/CalculatorHub';
import BulletinsPage from './components/Bulletins';
import UtilitiesPage from "./components/Utilities";
import ActsPage from "./components/Acts";
import RulesPage from "./components/Rules";
import AboutPage from "./components/About";
import FormsPage from "./components/Forms";
import KnowledgeBankPage from './components/KnowledgeBankPage';
import TaxDeadlineAlerts from './components/TaxDeadlineAlerts';
import NewsPage from './components/NewsPage';
import AdminNews from './components/AdminNews'; // Import AdminNews component
import FloatingQueryButton from './components/FloatingQueryButton';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  
  return (
    <div className="bg-slate-600">
      <Nav />
      <Example />
      <FloatingQueryButton />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Carousel fade />
              <HomeServices />
              <N />
              <Footer />
            </>
          } />
          <Route path="/query" element={<QueryForm />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/EvisitingCard" element={<EVisitingCard />} /> 
          <Route path="/calculators" element={<CalculatorHub />} /> 
          <Route path="/knowledge-bank" element={<KnowledgeBankPage />} />
          <Route path="/Bulletins" element={<BulletinsPage />} /> 
          <Route path="/Utilities" element={<UtilitiesPage />} /> 
          <Route path="/Acts" element={<ActsPage />} /> 
          <Route path="/Rules" element={<RulesPage />} /> 
          <Route path="/Forms" element={<FormsPage />} /> 
          <Route path="/About" element={<AboutPage />} />
          <Route path="/tax-deadline-alerts" element={<TaxDeadlineAlerts />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/admin/news" element={<AdminNews />} /> {/* Admin News Route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
