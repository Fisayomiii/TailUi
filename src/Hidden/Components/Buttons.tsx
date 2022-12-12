import 'react';
// import Sidebar from '../Sidebar/Sidebar';
import { ClipboardIcon, XMarkIcon } from "@heroicons/react/24/outline";


function Buttons() {
    return (
        <>
            {/* <Sidebar /> */}
            <div className='pl-[1.2rem] lg:pl-[27.5rem] p-5'>
                <div className='max-w-3xl mx-auto pt-[8.125rem] xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16'>
                    <header id="header" className="relative z-20 pb-5">
                        <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">Components {'>'} Ui</p>
                        <div className="flex items-center">
                            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Buttons</h1>
                        </div>
                        <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">Use Tailwind’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                    </header>

                    <div className='pb-9'>
                        <h3 className="inline-block text-1xl pb-2 sm:text-2xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Basic Buttons (Default)</h3>
                        <div className='p-8 bg-white rounded-lg shadow-lg border-gray-500 border-2 rounded-lg'>
                            <button className='relative top-[-1rem]'>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            <div className="flex flex-wrap flex-1 gap-x-1">
                                <button className="text-sm px-7 py-3 text-white bg-blue-400 rounded-lg hover:bg-blue-400/90">bg-blue-400</button>
                                <button className="text-sm px-7 py-3 text-white bg-slate-400 rounded-lg hover:bg-gray-700/90">bg-slate-400</button>
                                <button className="text-sm px-7 py-3 text-white bg-yellow-400 rounded-lg hover:bg-yellow-400/90">bg-yellow-400</button>
                                <button className="text-sm px-8 py-3 text-white bg-red-400 rounded-lg hover:bg-red-400/90">bg-red-400</button>
                                <button className="text-sm px-6 py-3 text-white bg-green-400 rounded-lg hover:bg-green-400/90">bg-green-400</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="inline-block text-1xl pb-2 sm:text-2xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Outline buttons</h1>
                        <div className='p-6 bg-white rounded-lg shadow-lg border-gray-500 border-2 rounded-lg'>
                            <button className='relative top-[-1rem]'>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="flex flex-wrap flex-1 gap-x-1">
                                <button className="text-sm px-5 py-3 text-gray-700 border-gray-300 border-2 rounded-lg hover:border-gray-700">border-gray-300</button>
                                <button className="text-sm px-5 py-3 text-gray-700 border-yellow-300 border-2 rounded-lg ">border-yellow-300</button>
                                <button className="text-sm px-5 py-3 text-gray-700 border-red-300 border-2 rounded-lg ">border-red-300</button>
                                <button className="text-sm px-4 py-3 text-gray-700 border-green-300 border-2 rounded-lg ">border-green-300</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buttons;
