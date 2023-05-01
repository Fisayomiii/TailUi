import Header from '../../components/Header/Header';
import Basicbtns from '../../components/Templates/Buttons/Basicbtns';
import Outlinebtns from '../../components/Templates/Buttons/Outlinebtns';
import Shadowedbtns from '../../components/Templates/Buttons/Shadowedbtns';
import { NavLink } from 'react-router-dom';
// import { useRef, useState } from "react";
// import { toast } from "react-toastify";

import Gradientmonochrome from '../../components/Templates/Buttons/Gradient monochrome';
import Gradientduotone from '../../components/Templates/Buttons/Gradient duotone';
import Socialbuttons from '../../components/Templates/Buttons/Social buttons';
import Paymentbuttons from '../../components/Templates/Buttons/Payment buttons';
import Loaderbtns from '../../components/Templates/Buttons/Loaderbuttons';
import Iconbutton from '../../components/Templates/Buttons/Icon buttons';

function Buttonspage() {
  // const buttonareaRef = useRef(null);
  // const [cardId, setCardId] = useState();

  // const copyToClipboard = async (El: any, cardId: any) => {
  //   try {
  //     await navigator.clipboard.writeText(El.current.outerHTML);
  //     setCardId(cardId);
  //     toast.success("Code Copied", {
  //       icon: "✅"
  //     });
  //   } catch (error) {
  //     toast.error("Code not Copied", {
  //       icon: "❌"
  //     });
  //   }
  // };

  return (
    <>
      <Header />
      <div className='relative max-w-8xl lg:pl-[8rem]'>
        <div className='relative mx-auto mt-20 w-full max-w-container px-4 p-5 sm:px-6 lg:px-8 '>
          <div className="flex flex-col">
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Buttons</h1>
            <p className="mt-2 max-w-5xl text-lg text-slate-700 dark:text-slate-400">Use Tailwind’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components'}>
                Components
              </NavLink>
              <div aria-hidden="true" className="select-none text-slate-400">{'/'}</div>
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components/buttons'}>
                Buttons
              </NavLink>
            </nav>
          </div>

          <Basicbtns />
          <Outlinebtns />
          <Gradientmonochrome />
          <Gradientduotone />
          <Shadowedbtns />
          <Iconbutton />
          <Socialbuttons />
          <Paymentbuttons />
          <Loaderbtns />

        </div>
      </div>
    </>
  )
}

export default Buttonspage;
