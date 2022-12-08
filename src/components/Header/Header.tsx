import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Gradient from "../../Ui/Gradient/Gradient";
import Toggle from "../../Ui/Gradient/Toggle Btn/Toggle";

const navigation = [
    { name: "Templates", href: "/templates" },
    { name: "Features", href: "/" },
];
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="isolate bg-white">
                <Gradient />
                <div className="px-6 pt-5 pb-5 lg:px-8 fixed z-40 w-full backdrop-blur lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
                    <nav className="flex h-9 items-center justify-between" aria-label="Global" >
                        <div className="flex lg:min-w-0 lg:flex-1 justify-center" aria-label="Global" >
                            <a className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                                <span className="text-slate-900 dark:text-white w-auto h-5">Logo</span>
                            </a>
                            <select className="text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-7 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5">
                                <option className="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5">v3.2.4</option>
                            </select>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)} >
                                <span className="sr-only">Open main menu</span>
                                <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-semibold hover:text-sky-500 dark:hover:text-sky-400 "
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                                <label className="sr-only" id="headlessui-listbox-label-3" data-headlessui-state="">Theme</label>
                                <button type="button" id="headlessui-listbox-button-4" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4">
                                    <span className="dark:hidden">
                                        <Toggle />
                                    </span>
                                </button>
                                <a href="https://github.com/fisayo6969" className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                                    <span className="sr-only">Creators GitHub</span>
                                    <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </nav>

                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto bg-transparent backdrop-blur px-6 py-6 lg:hidden ">

                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
                                            <button type="button" className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setMobileMenuOpen(false)}>
                                                <div className="flex">
                                                    <span className="sr-only">Close menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                            </button>
                                            <ul className="space-y-6">
                                                {navigation.map((item) => (
                                                    <>
                                                        <li key={item.name}>
                                                            <a className="hover:text-sky-500 dark:hover:text-sky-400" href={item.href} >{item.name}</a>
                                                        </li>
                                                    </>
                                                ))}
                                            </ul>
                                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                                                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                                                    <button type="button">
                                                        <span className="dark:hidden">
                                                            <Toggle />
                                                        </span>
                                                    </button>
                                                    <a href="https://github.com/tailwindlabs/tailwindcss" className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                                                        <i className='bx bxl-github' ></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>

        </>
    );
}

export default Header;
