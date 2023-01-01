import { ClipboardIcon } from "@heroicons/react/24/outline";

const Simplecta = ({ areaRef, copyToClipboard }: any) => {

    return (
        <>
            <div className='pt-5 '>
                <h1 className="text-2xl pb-2 sm:text-1xl text-slate-900 tracking-tight">Simple</h1>
                <div className='mt-10 p-7 mt-4 overflow-hidden rounded-lg bg-white ring-1 ring-slate-900/5'>
                    <button title='Copy to Clipboard'
                        onClick={() => copyToClipboard(areaRef, "card1")}>
                        <ClipboardIcon className="h-6 w-6 stroke-slate-500 transition-all hover:rotate-[-4deg] hover:stroke-slate-600" aria-hidden="true" />
                    </button>
                    <div className="flex justify-center mb-5">
                        <section className="bg-white dark:bg-gray-900" ref={areaRef}>
                            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                                <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                                    Bring your Business to the <span className="text-blue-500">next level.</span>
                                </h2>

                                <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                                    explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iuto!
                                </p>

                                <div className="inline-flex w-full mt-6 sm:w-auto">
                                    <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Sign Up
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Simplecta