import { FC } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import "./index.css";

const Header: FC = () => {
    const activeClazz = "nav-link active-link";
    const defaultClazz = "nav-link";

    return (
        <>
            <header className="header h-16 fixed w-full border-b-2 shadow-md">
                <div className="container mx-auto h-full">
                    <div className="header_wrapper h-full flex justify-between items-center">
                        <NavLink
                            to="/"
                            className="header_logo block text-xl font-bold"
                        >
                            Good Poll
                        </NavLink>
                        <nav>
                            <ul className="flex gap-10">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                    >
                                        Add Poll
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/allpoll"
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                    >
                                        All Poll
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/activepoll"
                                        className={({ isActive }) =>
                                            isActive
                                                ? activeClazz
                                                : defaultClazz
                                        }
                                    >
                                        Active Poll
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
