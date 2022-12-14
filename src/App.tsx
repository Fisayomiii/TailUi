import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero/Hero";
import Buttonspage from "./pages/Buttons/Buttonspage";
import Breadcrumbspage from "./pages/Breadcrumbs/Breadcrumbspage";
import Alertspage from "./pages/Alert/Alertspage";
import Cardspage from "./pages/Cards/Cardspage";
import Notfoundpage from "./pages/404/Notfoundpage";
import Componentspage from "./pages/Components/Componentspage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/components" element={<Componentspage />} />
        <Route path="/components/buttons" element={<Buttonspage />} />
        <Route path="/components/breadcrumbs" element={<Breadcrumbspage />} />
        <Route path="/components/alerts" element={<Alertspage />} />
        <Route path="/components/cards" element={<Cardspage />} />
        <Route path="/*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
