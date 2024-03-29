import Header from '../../components/Header/Header';
import Defaultalert from '../../components/Templates/Alerts/Default alert';
import Alertswithicon from '../../components/Templates/Alerts/Alerts with icon';
import Borderedalerts from '../../components/Templates/Alerts/Bordered alerts';
import Alertswithlist from '../../components/Templates/Alerts/Alerts with list';
import { NavLink } from 'react-router-dom';
import Dismissingalert from '../../components/Templates/Alerts/Dismissingalerts';
import Additional from '../../components/Templates/Alerts/Additional';

function Alertspage() {
    

    return (
        <>
            <Header />
            <div className='relative max-w-8xl lg:pl-[10rem]'>
                <div className='relative mx-auto mt-20 w-full max-w-container px-4 p-5 sm:px-6 lg:px-8 '>
                    <div className="flex flex-col">
                        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Alerts</h1>
                        <p className="mt-2 max-w-4xl text-lg text-slate-700 dark:text-slate-400">Ready to use Tailwind CSS Alerts Components, copy-paste HTML components code, and build your awesome website, dashboard, landing page, and more.</p>
                        <nav aria-label="Breadcrumbs" className="order-first flex space-x-2 text-sm font-semibold">
                            <NavLink className="text-slate-500 hover:text-slate-600" to={'/components'}>
                                Components
                            </NavLink>
                            <div aria-hidden="true" className="select-none text-slate-400">{'/'}</div>
                            <NavLink className="text-slate-500 hover:text-slate-600" to={'/components/alerts'}>
                                Alerts
                            </NavLink>
                        </nav>
                    </div>

                    <Defaultalert />
                    <Alertswithicon />
                    <Borderedalerts />
                    <Alertswithlist />
                    <Dismissingalert />
                    <Additional />
                </div>
            </div>
        </>
    )
}

export default Alertspage