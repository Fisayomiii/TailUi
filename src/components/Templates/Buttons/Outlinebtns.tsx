import { ClipboardIcon } from "@heroicons/react/24/outline";

const Outlinebtns = ({ buttonareaRef, copyToClipboard }: any) => {

    return (
        <>
            <div className='pt-5'>
                <h1 className="text-1xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Outline button</h1>
                <p className="mt-2 text-md text-slate-700 dark:text-slate-400">In need of a button, but not the hefty background colors they bring? Replace the default button with this outline btns, it's easy, just copy the code to the Clipboard</p>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(buttonareaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex pl-[1rem] flex-wrap flex-1 gap-x-1 pb-10 pt-5">
                        <button className="text-sm px-5 py-3 text-gray-700 border-blue-300 border-2 rounded-lg hover:border-blue-400" ref={buttonareaRef}>border-blue-300</button>
                        <button className="text-sm px-5 py-3 text-gray-700 border-gray-300 border-2 rounded-lg hover:border-gray-400">border-gray-300</button>
                        <button className="text-sm px-5 py-3 text-gray-700 border-yellow-300 border-2 rounded-lg hover:border-yellow-400">border-yellow-300</button>
                        <button className="text-sm px-5 py-3 text-gray-700 border-red-300 border-2 rounded-lg hover:border-red-400">border-red-300</button>
                        <button className="text-sm px-4 py-3 text-gray-700 border-green-300 border-2 rounded-lg hover:border-green-400">border-green-300</button>
                    </div>
                </div>
            </div>

           
        </>
    )
}

export default Outlinebtns;
