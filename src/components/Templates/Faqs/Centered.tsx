import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Centered = () => {
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
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Centered</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center">
                        <section className="bg-white dark:bg-gray-900" ref={areaRef}>
                            <div className="container max-w-4xl px-6 py-10 mx-auto">
                                <h1 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions</h1>

                                <div className="mt-12 space-y-8">
                                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <button className="flex items-center justify-between w-full p-8">
                                            <h1 className="font-semibold text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>

                                            <span className="text-gray-400 bg-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                                </svg>
                                            </span>
                                        </button>

                                        <hr className="border-gray-200 dark:border-gray-700" />

                                        <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                                        </p>
                                    </div>

                                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <button className="flex items-center justify-between w-full p-8">
                                            <h1 className="font-semibold text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance?</h1>

                                            <span className="text-white bg-blue-500 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <button className="flex items-center justify-between w-full p-8">
                                            <h1 className="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                                            <span className="text-white bg-blue-500 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <button className="flex items-center justify-between w-full p-8">
                                            <h1 className="font-semibold text-gray-700 dark:text-white">What are your opening house?</h1>

                                            <span className="text-white bg-blue-500 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <button className="flex items-center justify-between w-full p-8">
                                            <h1 className="font-semibold text-gray-700 dark:text-white">What can i expect at my first consultation?</h1>

                                            <span className="text-white bg-blue-500 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Centered;
