import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/navbar";
import Nav from './components/prenavbar';
import Carousel from "./components/slider";
import N from './components/newsletter';
import Footer from './components/footer';
import QueryForm from './components/form'; // Import QueryForm page

function App() {
  return (
    <Router>
      <div className="bg-slate-600">
        <Nav />
        <Example />
        <Routes>
          <Route path="/" element={
            <>
              
              <Carousel fade />
              <N />
            </>
          } />
          <Route path="/query" element={<QueryForm />} /> {/* Route for QueryForm */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
