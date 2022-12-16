import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Gradient from "../../Ui/Gradient/Gradient";
import Toggle from "../../Ui/Gradient/Toggle Btn/Toggle";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    // { name: "Features", href: "/" },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="isolate bg-white">
                <Gradient />
                <div className="px-6 pt-5 pb-5 lg:px-8 z-40 w-full bg-white lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]dark:bg-slate-900/75">
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1 justify-center" aria-label="Global" >
                            <a className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
                                <svg className="h-6 w-auto" aria-hidden="true" viewBox="0 0 160 24" fill="none"><path d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z" className="fill-sky-400"></path><path d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z" fill="currentColor"></path></svg>
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
                                <a href="https://github.com/Fisayomiii/TailUi" target="_blank" rel="noreferrer" className="ml-6 text-2xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" title="Github">
                                    <i className='bx bxl-github' ></i>
                                </a>
                            </div>
                        </div>
                    </nav>

                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto backdrop-blur px-6 py-6 lg:hidden">

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
                                                    <a href="https://github.com/Fisayomiii/TailUi" target="_blank" rel="noreferrer" className="ml-6 text-2xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" title="Github">
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
