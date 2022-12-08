import "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero_Section/Hero";
import Sidebar from "./pages/Templates/Sidebar/Sidebar";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/templates" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
