import 'react';
import Gradient from '../../Ui/Gradient/Gradient';
import Header from '../Header/Header';

function Hero() {
    return (
        <>
            <Header />
            <main><br /><br /><br /><br />
                <div className="relative mx-auto mt-18 w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
                    <div className="w-full max-w-container lg:px-9 xl:mt-20 pt-12 sm:pt-8">
                        <h1 className="col-start-1 row-start-2 mt-4 pb-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:max-w-[40.5rem]">
                            Build your next project even faster 🌩.
                        </h1>
                        <p className="col-start-1 row-start-4 mt-4 sm:max-w-lg text-lg text-slate-700 ">
                            Beautifully designed, expertly crafted components and templates,
                            The perfect starting point for your next project ✨.
                        </p>
                        <div className="mt-7">
                            <a className="leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded py-4 px-3 items-center hover:bg-sky-400/20 hover:shadow-xl hover:scale-105 rounded-xl" href="/templates">Browse all Templates <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <Gradient />
            </main>
        </>
    )
}

export default Hero;
