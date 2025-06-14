import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Example from "./components/navbar";
import Nav from './components/prenavbar';
import Carousel from "./components/slider";
import N from './components/newsletter';
import Footer from './components/footer';
import EVisitingCard from './components/EvisitingCard';
import QueryForm from './components/form';
import ServicesPage from './components/Services';
import GSTCalculator from './components/Calculator';
import BulletinsPage from './components/Bulletins';
import UtilitiesPage from "./components/Utilities";
import ActsPage from "./components/Acts";
import RulesPage from "./components/Rules";
import AboutPage from "./components/About";
import FormsPage from "./components/Forms";


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isMainRoute = location.pathname === '/';
  
  return (
    <div className="bg-slate-600">
      <Nav />
      <Example />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Carousel fade />
              <N />
            </>
          } />
          <Route path="/query" element={<QueryForm />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/EvisitingCard" element={<EVisitingCard />} /> 
          <Route path="/Calculator" element={<GSTCalculator />} /> 
          <Route path="/Bulletins" element={<BulletinsPage />} /> 
          <Route path="/Utilities" element={<UtilitiesPage />} /> 
          <Route path="/Acts" element={<ActsPage />} /> 
          <Route path="/Rules" element={<RulesPage />} /> 
          <Route path="/Forms" element={<FormsPage />} /> 
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </main>
      {isMainRoute && <Footer />}
    </div>
  );
}

export default App;