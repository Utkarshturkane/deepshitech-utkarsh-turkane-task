import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="portfolio" element={<Portfolio />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
