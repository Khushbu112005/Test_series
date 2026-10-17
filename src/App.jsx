import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import TestSeries from "./pages/TestSeries";
import TestSeriesDetail from "./pages/TestSeriesDetail";
import Quiz from "./pages/Quiz";
import Academy from "./pages/Academy";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingDeliveryPolicy from "./pages/ShippingDeliveryPolicy";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/common/ScrollToTop";
// import { useEffect } from "react";
// import api from "./services/api";
// import homeService from "./services/homeService";

function GlobalWrapper() {
  return (
    <div className="relative bg-white text-[#111111] dark:bg-[#050F1A] dark:text-slate-100">
      <div className="fixed top-3 left-1/2 z-50 w-full max-w-[2048px] -translate-x-1/2 px-2 sm:top-4 sm:px-4 lg:top-6 lg:px-12">
        <Navbar />
      </div>
      <ScrollToTop />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  // useEffect(() => {
  //   const testAPI = async () => {
  //     try {
  //       const response = await api.get("/checksession");
  //       console.log("API connected successfully!");
  //       console.log(response.status);
  //     } catch (error) {
  //       console.error("API request failed:", error.message);
  //     }
  //   };
  //   testAPI();
  // }, []);
  // useEffect(() => {
  //   const fetchStatistics = async () => {
  //     try {
  //       const response = await homeService.getStatistics();
  //       console.log("Statistics:", response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch statistics:", error);
  //     }
  //   };

  //   fetchStatistics();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route element={<GlobalWrapper />}>
          <Route path="/" element={<Home />} />

          <Route path="/test-series">
            <Route index element={<TestSeries />} />

            <Route path=":id">
              <Route index element={<TestSeriesDetail />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Route>

          <Route path="/quiz" element={<Quiz />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route
            path="/shipping&delivery-policy"
            element={<ShippingDeliveryPolicy />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
