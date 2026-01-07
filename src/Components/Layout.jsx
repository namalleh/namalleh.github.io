import { Outlet, NavLink } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <div className="menu">
        <NavLink className="navBarLink" to="/">
          The Need.
        </NavLink>
        <NavLink className="navBarLink" to="/a-solution">
          A Solution!
        </NavLink>
        <NavLink className="navBarLink" to="/fine-grained-control">
          Fine Grained Control
        </NavLink>
        <NavLink className="navBarLink" to="/pricing">
          Pricing
        </NavLink>
        {/*<NavLink className="navBarLink" to="/dashboard">*/}
        {/*  Dashboard*/}
        {/*</NavLink>*/}
        <NavLink className="navBarLink" to="/get-in-touch">
          Get in touch
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
