// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import FormDemo from './pages/formDemo';
import AlgorithmDemo from './pages/algorithm';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/demo2" element={<FormDemo />} />
            <Route path="/demo3" element={<AlgorithmDemo />} />
        </Routes>
      </div>
    </Router>
  );
}