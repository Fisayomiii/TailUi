import { NavLink } from "react-router-dom";

function Notfoundpage() {
  return (
    <>
      <br /><br /><br /><br /><br /><br />
      <div className="flex justify-center items-center mt-12 pt-12">
        <div className="flex justify-center items-center gap-x-4">
          <h3 className="text-5xl font-semibold text-gray-700">404</h3>
          <div className="block border-l border-slate-400 pl-2">
            <span className="text-md font-semibold text-sky-700">This Page isn't routed!</span>
            <p>
              <NavLink to={'/'}>
                go back home
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <footer className="flex justify-center items-center mt-12">
        <p>Looks like you're lost.</p>
      </footer>
    </>
  );
}

export default Notfoundpage;
