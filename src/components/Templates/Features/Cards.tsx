import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Cards = () => {
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
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Cards</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center">
                        <section className="bg-white dark:bg-gray-900" ref={areaRef}>
                            <div className="container px-6 py-10 mx-auto">
                                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Components</span></h1>

                                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                </p>

                                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
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

export default Cards;
