import { NavLink } from 'react-router-dom';
import Gradient from '../../Ui/Gradient/Gradient';
import Header from '../../components/Header/Header';

function Componentspage() {
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
        {
            img: "https://merakiui.com/images/components/thumbnails/forms.webp",
            alt: "form img",
            linkto: "/components/form",
            name: "Form",
            components: "3 components"
        },
    ];
    return (
        <>
            <Header />
            <Gradient />

            <div className='px-5 pt-12 mx-auto max-w-8xl lg:px-4 '>
                <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 underline decoration-blue-500 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white text-center 2xl:px-48">Components</h2>
                <div className="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {components.map((item, i) => (
                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100" key={i}>
                            <NavLink to={item.linkto}>

                                <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                    <img src={item.img} alt={item.alt} className="absolute inset-0 h-full w-full" />
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                                    <span className="relative">{item.name}</span>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-slate-500">{item.components}</p>
                                <p className="pointer-events-none absolute top-3 right-3 z-10 flex items-center justify-center rounded-full bg-gray-900 bg-opacity-30 p-1 text-white">
                                    <i className='bx bx-lock-open-alt'></i>
                                </p>
                            </NavLink>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Componentspage