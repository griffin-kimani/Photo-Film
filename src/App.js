import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './containers';
import { Header } from './containers';
import {
  Navbar,
  Home,
  AboutUs,
  Testimonies,
  Blog,
  Portfolio,
  Photography,
  Contact,
  About,
  Review,
  Bridesgroom,
  Ceremony,
  Reception,
  Couples,
  Couple1,
  Couple2,
  Couple3,
  Couple4,
  Couple5,
} from './components';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <About />
                  <Portfolio />
                  <Testimonies />
                  <Contact />
                  <Blog /> 
                  <Review />
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Photography />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/bridesgroom" element={<Bridesgroom />} />
            <Route path="/portfolio/couple" element={<Couples />} />
            <Route path="/portfolio/ceremony" element={<Ceremony />} />
            <Route path="/portfolio/reception" element={<Reception />} />
            <Route path="/gallery/couple1" element={<Couple1 />} />
            <Route path="/gallery/couple2" element={<Couple2 />} />
            <Route path="/gallery/couple3" element={<Couple3 />} />
            <Route path="/gallery/couple4" element={<Couple4 />} />
            <Route path="/gallery/couple5" element={<Couple5 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;