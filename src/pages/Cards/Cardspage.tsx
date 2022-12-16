import Header from '../../components/Header/Header';
import Productcard from '../../components/Templates/Cards/Productcard';
import Productcardtwo from '../../components/Templates/Cards/Productcardtwo';
import Testimonialcard from '../../components/Templates/Cards/Testimonialcard';
import Profilecard from '../../components/Templates/Cards/Profilecard';
import { NavLink } from 'react-router-dom';

function Cardspage() {
    return (
        <>
            <Header />
            <div className='relative max-w-8xl lg:pl-[10rem]'>
                <div className='relative mx-auto mt-20 w-full max-w-container px-4 p-5 sm:px-6 lg:px-8 '>
                    <div className="flex flex-col">
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Cards</h1>
                        <p className="mt-2 max-w-4xl text-lg text-slate-700 dark:text-slate-400">Ready to use Tailwind CSS Cards Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more.
                        </p>
                        <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
                            <NavLink className="text-slate-500 hover:text-slate-600" to={'/components'}>
                                Components
                            </NavLink>
                            <div aria-hidden="true" className="select-none text-slate-400">{'/'}</div>
                            <NavLink className="text-slate-500 hover:text-slate-600" to={'/components/cards'}>
                                Cards
                            </NavLink>
                        </nav>
                    </div>

                    <Productcard />
                    <Productcardtwo />
                    <Testimonialcard />
                    <Profilecard />

                </div>
            </div>
        </>
    )
}

export default Cardspage;
