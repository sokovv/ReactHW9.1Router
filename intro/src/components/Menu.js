import {
    NavLink,
    Outlet,
  } from "react-router-dom";

export default function Menu(props) {
    return (
      <>
        <div className="page">
          <nav className="menu">
            {Object.entries(props.menu).map(([rId, menu]) => (
              <NavLink to={`/${rId}`} key={rId} className="menu__item">
                {menu.title}
              </NavLink>
            ))}
          </nav>
          <Outlet />
        </div>
      </>
    );
  }