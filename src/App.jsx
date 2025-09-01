import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Faq from "./Component/Faq";
import Apply from "./Component/Apply";
import Signup from "./Component/Signup";
import Scroll from "./Component/Scroll/indexs";

function App() {
      return (
            <>
                  <BrowserRouter>
                        <Scroll />
                        <Header />
                        <Routes>
                              <Route path="/" index element={<Home />} />
                              <Route path="/services" element={<Services />} />
                              <Route path="/contact" element={<Contact />} />
                              <Route path="/faq" element={<Faq />} />
                              <Route path="/apply" element={<Apply />} />
                              <Route path="/signup" element={<Signup />} />
                        </Routes>
                        <Footer />
                  </BrowserRouter>
            </>
      );
}

export default App;

