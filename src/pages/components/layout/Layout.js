import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UseState">useState</Link>
          </li>
          <li>
            <Link to="/UseReducer">UseReducer</Link>
          </li>
          <li>
            <Link to="/UseEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/UseLayout">UseLayout</Link>
          </li>
          <li>
            <Link to="/RefTutorial">UseRef</Link>
          </li>
          <li>
            <Link to="/UseImperativeHandle">UseImperativeHandle</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
