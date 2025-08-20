import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-sm py-4 px-8 sticky top-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                {/* Navigation Links */}
                <div className="flex gap-20 text-gray-600 font-medium">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `transition ${isActive
                                ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                                : "hover:text-gray-900"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition ${isActive
                                ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                                : "hover:text-gray-900"
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/user"
                        className={({ isActive }) =>
                            `transition ${isActive
                                ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                                : "hover:text-gray-900"
                            }`
                        }
                    >
                        Users
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
