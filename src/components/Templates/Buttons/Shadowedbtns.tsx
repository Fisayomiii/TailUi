import { ClipboardIcon } from "@heroicons/react/24/outline";

const Shadowedbtns = ({ buttonareaRef, copyToClipboard }: any) => {

    return (

        <>
            <div className='pt-5'>
                <h1 className="text-1xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Shadowed button</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(buttonareaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex pl-[1rem] flex-wrap flex-1 gap-x-1 pb-10 pt-5">
                        <button className="px-5 py-3 text-gray-700 bg-blue-400 hover:shadow-xl hover:scale-102 rounded-lg transition-all" ref={buttonareaRef}>hover:shadow-sm</button>
                        <button className="px-5 py-3 text-gray-700 bg-blue-400 hover:shadow-xl hover:scale-102 rounded-lg transition-all">hover:shadow-md</button>
                        <button className="px-5 py-3 text-gray-700 bg-blue-400 hover:shadow-xl hover:scale-102 rounded-lg transition-all">hover:shadow-lg</button>
                        <button className="px-5 py-3 text-gray-700 bg-blue-400 hover:shadow-xl hover:scale-102 rounded-lg transition-all">hover:shadow-xl</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shadowedbtns;
