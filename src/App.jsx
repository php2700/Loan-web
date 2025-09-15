import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Home/Index";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Faq from "./Component/Faq";
import Apply from "./Component/Apply";
import Signup from "./Component/Signup";
import Scroll from "./Component/Scroll/indexs";
import { Referral } from "./Component/Referrals";
import { UserProvider } from "./Component/Context";

function App() {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("loanToken");

    if (!token) {
      return <Navigate to="/signup" replace />;
    }
    return children;
  };
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Scroll />
          <Header />
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/apply" element={<PrivateRoute><Apply /></PrivateRoute>} />
            <Route path="/referrals" element={<PrivateRoute><Referral /></PrivateRoute>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
