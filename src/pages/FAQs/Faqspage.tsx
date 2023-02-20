import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Centered from '../../components/Templates/Faqs/Centered';
import Cards from '../../components/Templates/Faqs/Cards';
import Grid from '../../components/Templates/Faqs/Grid';
import Collapse from '../../components/Templates/Faqs/Collapse';

function Faqspage() {
  const areaRef = useRef(null);
  const [cardId, setCardId] = useState();

  const copyToClipboard = async (El: any, cardId: any) => {
    try {
      await navigator.clipboard.writeText(El.current.outerHTML);
      setCardId(cardId);
      toast.success("Code Copied", {
        icon: "✅"
      });
    } catch (error) {
      toast.error("Code not Copied", {
        icon: "❌"
      });
    }
  };
  return (
    <>
      <Header />
      <div className='relative max-w-8xl lg:pl-[10rem]'>
        <div className='relative mx-auto mt-20 w-full max-w-container px-4 p-5 sm:px-6 lg:px-8 '>
          <div className="flex flex-col">
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">FAQ's</h1>
            <p className="mt-2 max-w-4xl text-lg text-slate-700 dark:text-slate-400">Ready to use Tailwind CSS FAQ Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more.</p>
            <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components'}>
                Components
              </NavLink>
              <div aria-hidden="true" className="select-none text-slate-400">{'/'}</div>
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components/faqs'}>
                FAQ's
              </NavLink>
            </nav>
          </div>

          <Centered />
          <Cards />
          <Grid />
          <Collapse />

        </div>
      </div>
    </>
  )
}

export default Faqspage