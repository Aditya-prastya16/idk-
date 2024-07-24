
"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <nav className="mt-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <ul
          className={`md:flex md:space-x-4 p-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="text-gray-600 hover:text-blue-600 my-3 cursor-pointer transition duration-300">
            Rangkuman
          </li>
          <li className="text-gray-600 hover:text-blue-600 my-3 cursor-pointer transition duration-300">
            Pendapatan
          </li>
          <li className="text-gray-600 hover:text-blue-600 my-3 cursor-pointer transition duration-300">
            Barang Dibeli
          </li>
          <li className="text-gray-600 hover:text-blue-600 my-3 cursor-pointer transition duration-300">
            Rangkuman Bulanan
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar