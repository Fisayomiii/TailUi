import { useRef, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Basicbtns() {
  const buttonareaRef = useRef(null);
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
      <div className='pt-5'>
        <h1 className="text-1xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Basic Button ( Default )</h1>
        <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
          <button title='Copy to Clipboard'
            onClick={() => copyToClipboard(buttonareaRef, "card1")}>
            <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
          </button>
          <div className="flex pl-[1rem] flex-wrap flex-1 gap-x-1 pb-10 pt-5">
            <button className="text-sm px-7 py-3 text-white bg-blue-400 rounded-lg hover:bg-blue-400/90" ref={buttonareaRef}>bg-blue-400</button>
            <button className="text-sm px-7 py-3 text-white bg-slate-400 rounded-lg hover:bg-gray-700/90">bg-slate-400</button>
            <button className="text-sm px-7 py-3 text-white bg-yellow-400 rounded-lg hover:bg-yellow-400/90">bg-yellow-400</button>
            <button className="text-sm px-8 py-3 text-white bg-red-400 rounded-lg hover:bg-red-400/90">bg-red-400</button>
            <button className="text-sm px-6 py-3 text-white bg-green-400 rounded-lg hover:bg-green-400/90">bg-green-400</button>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default Basicbtns;
