import Header from '../../components/Header/Header';
import Successalert from '../../components/Templates/Alerts/Successalert';
import Infoalert from '../../components/Templates/Alerts/Infoalert';
import Erroralert from '../../components/Templates/Alerts/Erroralert';
import Notificationalert from '../../components/Templates/Alerts/Notificationalert';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Alertspage() {
    const areaRef = useRef(null);
    const [cardId, setCardId] = useState();

    const copyToClipboard = async (El: any, cardId: any) => {
        try {
            await navigator.clipboard.writeText(El.current.outerHTML);
            setCardId(cardId);
            toast.success("Code Copied", {
                icon: "✅"
            });
        } catch (error) {
            toast.error("Code not Copied", {
                icon: "❌"
            });
        }
    };
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

                    <Successalert areaRef={areaRef} copyToClipboard={copyToClipboard}  />
                    <Infoalert areaRef={areaRef} copyToClipboard={copyToClipboard} />
                    <Erroralert areaRef={areaRef} copyToClipboard={copyToClipboard} />
                    <Notificationalert areaRef={areaRef} copyToClipboard={copyToClipboard} />
                </div>
            </div>
        </>
    )
}

export default Alertspage