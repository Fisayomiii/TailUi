import { useRef, useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Testimonialcard() {
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
            <div className='pt-5 '>
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Testimonial Card</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center mb-5 p-12">
                        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800" ref={areaRef}>
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
                            </div>

                            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Design Tools</h2>

                            <p className="mt-2 text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                            <div className="flex justify-end mt-4">
                                <a href="#" className="text-xl font-medium text-blue-600 dark:text-blue-300" role="link">John Doe</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

           
        </>
    )
}

export default Testimonialcard;
