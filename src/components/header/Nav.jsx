"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background px-5 md:px-0">
      <div className="container mx-auto flex justify-between">
        <button
          className="text-white text-2xl py-3 md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {!isOpen && (
          <button className="bg-primary text-white px-5 py-3 ml-5 my-1 uppercase rounded md:hidden">
            make an appointment
          </button>
        )}

        {/* Memu items */}
        <div className="md:flex md:items-center md:justify-center hidden flex-wrap xl:justify-between w-full">
          {navItems.map((item) => (
            <Link
              className={`py-4 px-8 hover:bg-secondary duration-200 uppercase text-white ${
                path.includes(item) && "bg-primary"
              }`}
              key={item}
              href={`/${item}`}
            >
              {item}
            </Link>
          ))}
          <button className="bg-primary border border-primary hover:bg-transparent hover:text-primary duration-200 text-white px-5 py-3 my-1 xl:ml-24 2xl:ml-48 uppercase rounded hidden md:block">
            make an appointment
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-background md:hidden pb-5">
          {navItems.map((item) => (
            <Link
              className="uppercase text-white py-5 px-10 block hover:bg-secondary duration-200"
              key={item}
              href={`/${item}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button
            className="bg-primary text-white px-5 py-2 uppercase rounded w-full mt-3"
            onClick={() => setIsOpen(false)}
          >
            make an appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;

const navItems = [
  "home",
  "about",
  "team",
  "services",
  "departments",
  "gallery",
  "contact",
];
