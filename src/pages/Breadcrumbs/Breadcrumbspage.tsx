import { NavLink } from 'react-router-dom';
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Defaultbreadcrumbs from '../../components/Templates/Breadcrumbs/Defaultbreadcrumbs';
import Solidbackgroundbreadcrumbs from '../../components/Templates/Breadcrumbs/Solid background';
import Headerbreadcrumb from '../../components/Templates/Breadcrumbs/Header breadcrumb';

function Breadcrumbspage() {
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
      <div className='relative max-w-8xl lg:pl-[8rem]'>
        <div className='relative mx-auto mt-20 w-full max-w-container px-4 p-5 sm:px-6 lg:px-8 '>
          <div className="flex flex-col">
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Breadcrumbs</h1>
            <p className="mt-2 max-w-5xl text-lg text-slate-700 dark:text-slate-400">
              Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components. <br /><br /><hr /><br />

              The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.<br /><br />

              TailUI includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.<br /><br />
              Ready to use Tailwind CSS Breadcrumbs Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more.</p>
            <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components'}>
                Components
              </NavLink>
              <div aria-hidden="true" className="select-none text-slate-400">{'/'}</div>
              <NavLink className="text-slate-500 hover:text-slate-600" to={'/components/breadcrumbs'}>
                Breadcrumbs
              </NavLink>
            </nav>
          </div>

          <Defaultbreadcrumbs areaRef={areaRef} copyToClipboard={copyToClipboard} />
          <Solidbackgroundbreadcrumbs areaRef={areaRef} copyToClipboard={copyToClipboard} />
          <Headerbreadcrumb areaRef={areaRef} copyToClipboard={copyToClipboard} />

        </div>
      </div>
    </>
  )
}

export default Breadcrumbspage;
