import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Buttonspage from "./pages/Buttons/Buttonspage";
import Breadcrumbspage from "./pages/Breadcrumbs/Breadcrumbspage";
import Alertspage from "./pages/Alert/Alertspage";
import Cardspage from "./pages/Cards/Cardspage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/components/buttons" element={<Buttonspage />} />
        <Route path="/components/breadcrumbs" element={<Breadcrumbspage />} />
        <Route path="/components/alerts" element={<Alertspage />} />
        <Route path="/components/cards" element={<Cardspage />} />
      </Routes>
    </>
  );
}

export default App;
