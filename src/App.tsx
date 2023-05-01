import Hero from "./pages/Hero/Hero";
import Buttonspage from "./pages/Buttons/Buttonspage";
import Breadcrumbspage from "./pages/Breadcrumbs/Breadcrumbspage";
import Alertspage from "./pages/Alert/Alertspage";
import Cardspage from "./pages/Cards/Cardspage";
import Notfoundpage from "./pages/404/Notfoundpage";
import Componentspage from "./pages/Components/Componentspage";
import Ctapage from "./pages/Cta/Ctapage";
import Footer from "./components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Faqspage from "./pages/FAQs/Faqspage";
import Featurespage from "./pages/Features/Featurespage";
import Formspage from "./pages/Forms/Formspage";

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
        <Route path="/components/cta" element={<Ctapage />} />
        <Route path="/components/faqs" element={<Faqspage />} />
        <Route path="/components/features" element={<Featurespage />} />
        <Route path="/components/form" element={<Formspage />} />
        <Route path="/*" element={<Notfoundpage />} />
      </Routes><br /><br />
      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
