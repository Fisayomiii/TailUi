import { useRef, useState } from "react";
import toast from 'react-hot-toast';
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Defaultalert = () => {
    const areaRef = useRef(null);
    const [cardId, setCardId] = useState();

    const copyToClipboard = async (El: any, cardId: any) => {
        try {
            await navigator.clipboard.writeText(El.current.outerHTML);
            setCardId(cardId);
            toast.success("Code Copied");
        } catch (error) {
            toast.error("Code not Copied");
        }
    };

    return (
        <>
            <div className='pt-5'>
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Default alert</h1>
                <p className="mt-2 text-md text-slate-700 dark:text-slate-400">These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.</p>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center">
                        <div>
                            <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert" ref={areaRef}>
                                <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                            </div>
                            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
                                <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
                            </div>
                            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400" role="alert">
                                <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
                            </div>
                            <div className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-gray-800 dark:text-yellow-300" role="alert">
                                <span className="font-medium">Warning alert!</span> Change a few things up and try submitting again.
                            </div>
                            <div className="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-300" role="alert">
                                <span className="font-medium">Dark alert!</span> Change a few things up and try submitting again.
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Defaultalert;
