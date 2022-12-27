import { useRef, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Productcard() {
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
            <div className='pt-5 '>
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Product Card</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(buttonareaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center mb-5">
                        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" ref={buttonareaRef}>
                            <div className="px-4 py-2">
                                <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">NIKE AIR</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                            </div>

                            <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                                <h1 className="text-lg font-bold text-white">$129</h1>
                                <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Productcard