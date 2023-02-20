import { NavLink } from 'react-router-dom';
import Gradient from '../../Ui/Gradient/Gradient';

function Hero() {

    const components = [
        {
            img: "https://merakiui.com/images/components/thumbnails/alerts.webp",
            alt: "Alerts img",
            linkto: "/components/alerts",
            name: "Alerts",
            components: "6 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/buttons.webp",
            alt: "Buttons img",
            linkto: "/components/buttons",
            name: "Buttons",
            components: "9 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/breadcrumbs.webp",
            alt: "Breadcrumbs img",
            linkto: "/components/breadcrumbs",
            name: "Breadcrumbs",
            components: "3 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/cards.webp",
            alt: "Card img",
            linkto: "/components/cards",
            name: "Cards",
            components: "4 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/cta.webp",
            alt: "CTA img",
            linkto: "/components/cta",
            name: "CTA",
            components: "2 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/faq.webp",
            alt: "FAQs img",
            linkto: "/components/faqs",
            name: "FAQ's",
            components: "4 components"
        },
        {
            img: "https://merakiui.com/images/components/thumbnails/features.webp",
            alt: "Features img",
            linkto: "/components/features",
            name: "Features",
            components: "4 components"
        },
    ];
    
    return (
        <>
            <main><br /><br />
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="grid gap-1 lg:grid-cols-2">
                        <div className="w-full max-w-container pb-10 ">
                            <div className="w-full max-w-container lg:px-9 xl:mt-20 pt-12 sm:pt-8">
                                <h1 className="col-start-1 row-start-2 mt-4 pb-1 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:max-w-[40.5rem]">
                                    <span className="relative inline-block">
                                        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-[0] left-9 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                            <defs>
                                                <pattern id="84d09fa9-a544-44bd-88b2-08fdf4cddd38" x="0" y="0" width=".135" height=".30">
                                                    <circle cx="1" cy="1" r=".7"></circle>
                                                </pattern>
                                            </defs>
                                            <rect fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)" width="52" height="24"></rect>
                                        </svg>
                                    </span>
                                    Build your next project even faster 🌩.
                                </h1>
                                <p className="col-start-1 row-start-4 mt-4 sm:max-w-lg text-lg text-slate-700 ">
                                    Beautifully designed, expertly crafted components and templates,
                                    The perfect starting point for your next project ✨.
                                </p>
                                <div className="mt-7">
                                    <a className="leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded py-4 px-3 items-center hover:bg-sky-400/20 hover:shadow-xl hover:scale-105 rounded-xl" href="/components">Browse all Templates <span aria-hidden="true"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className="object-cover mb-6 rounded transition-all h-48 sm:h-48 xl:h-56 w-48 sm:w-48 xl:w-56 hover:shadow-md"
                                    src="https://cdn.dribbble.com/users/5897/screenshots/1225745/ios_7_toggle.gif"
                                    alt="toggle.gif"
                                />
                                <img className="object-cover w-38 h-28 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 hover:shadow-md" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="people" />
                            </div>
                            <div className="px-4">
                                <img className="object-cover w-60 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 hover:shadow-md" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="people" />
                            </div>
                        </div>
                    </div>
                </div>
                <Gradient />

                {/* <div id='templates' className='relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20'>
                    <section className="grid grid-cols-1 gap-x-8 gap-y-10 scroll-mt-12 py-10 p-12 mt-12 lg:grid-cols-3">
                        <h3 className="text-base font-semibold text-slate-900">Buttons</h3>
                        <ul className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
                            <li>
                                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                        <img src="https://merakiui.com/images/components/thumbnails/buttons.webp" alt="" className="absolute inset-0 h-full w-full" />
                                    </div>
                                    <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                                        <a href="/buttons">
                                            <span className="relative">Buttons</span>
                                        </a>
                                    </h4>
                                    <p className="relative mt-1.5 text-xs font-medium text-slate-500">3 components</p>
                                    <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white h-">
                                        <i className='bx bx-lock-open-alt'></i>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div> */}

                <div id='templates' className='px-5 pt-12 mx-auto max-w-8xl lg:px-4 '>
                    <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 underline decoration-blue-500 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white lg:text-center 2xl:px-48">Components</h2>
                    <div className="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                        {components.map((item ,i) => (
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100" key={i}>
                                <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src={item.img} alt={item.alt} className="absolute inset-0 h-full w-full" />
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                                    <NavLink to={item.linkto}>
                                        <span className="relative">{item.name}</span>
                                    </NavLink>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-slate-500">{item.components}</p>
                                <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                                    <i className='bx bx-lock-open-alt'></i>
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </main>
        </>
    )
}

export default Hero;
