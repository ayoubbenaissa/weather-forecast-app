import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import { Forecast } from "./pages/Forecast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
