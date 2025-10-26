import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Service from "./component/Service";
import Faq from "./component/Faq";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">App Dost</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/service" className="nav-link">Service</Link></li>
            <li className="nav-item"><Link to="/faq" className="nav-link">FAQs</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
          </ul>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;