import { NavLink } from "react-router-dom";

function Notfoundpage() {
  return (
    <>
      <div className="mt-12">
        <div className="flex justify-center gap-5 h-9 items-center">
          <h3 className="text-5xl font-semibold text-gray-700">404</h3>
          <div className="block border-l border-slate-200 pl-6">
            <span className="text-3xl font-semibold text-sky-700">Page Not Found</span>
            <NavLink to={"/"}>
              <div className="flex font-medium">
                <span >Go Home</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notfoundpage;
