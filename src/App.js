import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="scrollbar-hide">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
