import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import toast from 'react-hot-toast';

const Alertswithlist = () => {
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
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Alerts with list</h1>
                <p className="mt-2 text-md text-slate-700 dark:text-slate-400">Use this example to show a list and a description inside an alert component.</p>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center mb-5">
                        <div  >

                            <div className="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-800 dark:text-blue-400" role="alert" ref={areaRef}>
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Ensure that these requirements are met:</span>
                                    <ul className="mt-1.5 ml-4 list-disc list-inside">
                                        <li>At least 10 characters (and up to 100 characters)</li>
                                        <li>At least one lowercase character</li>
                                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
                                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Danger</span>
                                <div>
                                    <span className="font-medium">Ensure that these requirements are met:</span>
                                    <ul className="mt-1.5 ml-4 list-disc list-inside">
                                        <li>At least 10 characters (and up to 100 characters)</li>
                                        <li>At least one lowercase character</li>
                                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Alertswithlist;
