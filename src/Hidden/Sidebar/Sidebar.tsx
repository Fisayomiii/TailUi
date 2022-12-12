import { useState } from "react";
// import Header from '../../../components/Header/Header';
import Main from "../Main/Main";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const sidebarcomponentnavigation = [
    { name: "Alerts", href: "/" },
    { name: "Button", href: "/templates/buttons" },
];

function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* <Header /> */}
            <div>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
                    <button type="button" className="block lg:hidden absolute top-20 left-5 w-8 h-11 flex items-center justify-center text-slate-900 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setMobileMenuOpen(true)}>
                        <div className="flex">
                            <span className="sr-only">Close menu</span>
                            <Bars3Icon className="h-9 w-9" aria-hidden="true" />
                        </div>
                    </button>

                    <div className='hidden lg:block fixed z-20 inset-0 top-[5.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto'>

                        <div className="sticky top-0 -ml-0.5">
                            <div className="h-10 dark:bg-slate-900"></div>
                            <div className="">
                                <input type="text" placeholder='Quick search...' className="hidden w-full lg:flex items-center text-sm text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 bg-transparent hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" />
                            </div>
                            <ul>
                                <li className="mt-12 lg:mt-8">
                                    <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Components</h5>
                                    <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                        {sidebarcomponentnavigation.map((item) => (
                                            <>
                                                <li key={item.name}>
                                                    <a className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href={item.href} >{item.name}</a>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto bg-transparent backdrop-blur px-6 py-6 lg:hidden">
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-5 py-">
                                        <div className="relative top-[-1.8125rem] left-[-1.8125rem] bg-white shadow-lg w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800">
                                            <button type="button" className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                                                <div className="flex">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                            </button>
                                            <nav className="lg:text-sm lg:leading-6  relative">
                                                <div className="sticky -ml-0.5">
                                                    <div className="h-3 dark:bg-slate-900"></div>
                                                    <div className="">
                                                        <input type="text" placeholder='Quick search...' className="hidden w-full lg:flex items-center text-sm text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 bg-transparent hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700" />
                                                    </div>
                                                    <ul>
                                                        <li className="mt-12 lg:mt-8">
                                                            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Components</h5>
                                                            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                                                                {sidebarcomponentnavigation.map((item) => (
                                                                    <>
                                                                        <li key={item.name}>
                                                                            <a className="block border-l pl-4 -ml-px border-transparent font-semibold text-slate-700 valid:text-sky-500 focus:text-sky-500 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href={item.href} >{item.name}</a>
                                                                        </li>
                                                                    </>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Dialog.Panel>
                    </Dialog>

                    {/* <Main /> */}

                </div>

            </div>

        </>
    )
}

export default Sidebar;