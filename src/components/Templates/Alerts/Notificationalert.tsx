import { useRef, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Notificationalert() {
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
            <div className='pt-5'>
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Notification alert</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center mb-5">
                        <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800" ref={areaRef}>
                            <div className="w-2 bg-gray-800 dark:bg-gray-900"></div>

                            <div className="flex items-center px-2 py-3">
                                <img className="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />

                                <div className="mx-3">
                                    <p className="text-gray-600 dark:text-gray-200">Sara has replied on the <a className="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

           
        </>
    )
}

export default Notificationalert;
