import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layoyt.module.css';

const Layoyt = () => {
  //  const isMobile = window.innerWidth <= 768;
  return (
    <div className={css.filmsTrending}>
      <header className={css.container}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                CH mobile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/presentation-CH"
              >
                Development
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/slider-CH"
              >
                slider-CH
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/shops"
              >
                Our Shops
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${css.active} ${css.contacts}`
                    : `${css.headerLink} ${css.contacts}`
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layoyt;
