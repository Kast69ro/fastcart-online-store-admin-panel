import {  NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Other() {

  return (
    <div>
      <div className="flex items-center gap-4 mb-10">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold bg-[#DBEAFE] px-4 py-2 rounded-[4px]"
              : "font-bold"
          }
        >
          Categories
        </NavLink>

        <NavLink
          to="brands"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold bg-[#DBEAFE] px-4 py-2 rounded-[4px]"
              : "font-bold"
          }
        >
          Brands
        </NavLink>
        <NavLink
          to="subcategories"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold bg-[#DBEAFE] px-4 py-2 rounded-[4px]"
              : "font-bold"
          }
        >
          Subcategories
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
