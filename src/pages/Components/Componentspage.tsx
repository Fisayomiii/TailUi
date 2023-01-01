import { NavLink } from 'react-router-dom';
import Gradient from '../../Ui/Gradient/Gradient';
import Header from '../../components/Header/Header';

function Componentspage() {
    return (
        <>
            <Header />
            <Gradient />

            <div className='px-5 pt-12 mx-auto max-w-8xl lg:px-4 '>
                <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white lg:text-center 2xl:px-48">Components</h2>
                <div className="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/alerts.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/alerts'}>
                                <span className="relative">Alerts</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">4 component</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/buttons.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/buttons'}>
                                <span className="relative">Buttons</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">3 components</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/breadcrumbs.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/breadcrumbs'}>
                                <span className="relative">Breadcrumb</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">1 component</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/cards.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/cards'}>
                                <span className="relative">Cards</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">4 components</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white h-">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/cta.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/cta'}>
                                <span className="relative">CTA</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">2 components</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white h-">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>

                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                            <img src="https://merakiui.com/images/components/thumbnails/faq.webp" alt="" className="absolute inset-0 h-full w-full" />
                        </div>
                        <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                            <NavLink to={'/components/faqs'}>
                                <span className="relative">FAQ's</span>
                            </NavLink>
                        </h4>
                        <p className="relative mt-1.5 text-xs font-medium text-slate-500">4 components</p>
                        <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white h-">
                            <i className='bx bx-lock-open-alt'></i>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Componentspage