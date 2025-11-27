import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, Links } from "react-router";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
// import Cart from "../Layers/Cart";

const navitemns = [
  { name: "Home", path: "/" },
  { name: "Pages", path: "/pages" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];
const login = [{ name: "Login", path: "/login" }];

function Header() {
  const [open, setopen] = useState(false);
  const toggledropdown = () => setopen(!open);
  return (
    <div>
      <div className="flex justify-around bg-purple-700 p-2 text-white font-verdana cursor-pointer">
        <div className="flex gap-1 ">
          <CiMail className="h-6 size-5 "  />

          <p className="mr-5 ">mhhasanul@gmail.com</p>
          <CiPhone className="h-6 size-5" />

          <p>(12345)67890</p>
        </div>
        <ul className="flex gap-6  ">
          <li className="">
            <div className="transition-all duration-300 ">
              <button
                className="transition-all duration-200  hover:-translate-y-0.5 hover:font-bold
                 cursor-pointer"
                onClick={() => toggledropdown()}
              >
                English▼
              </button>
              {open && (
                <div className="absolute z-55555 right-108 mt-2 w-40 bg-white border rounded-md shadow-md text-center  ">
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-300"
                  >
                    Nepali
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-300 "
                  >
                    Hindi
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-300"
                  >
                    Japnese
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-300"
                  >
                    Chinese
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-300"
                  >
                    Newari
                  </a>
                </div>
              )}
            </div>
          </li>
          <li className="transition-all duration-200  hover:-translate-y-0.5 hover:font-bold
                 cursor-pointer">USD</li>
          {login.map((el) => {
            return (
              <li className="transition-all duration-200  hover:-translate-y-0.5 hover:font-bold
                 cursor-pointer">
                <Link to={el.path}>{el.name}</Link>
              </li>
            );
          })}
          <li className="transition-all duration-200  hover:-translate-y-0.5 hover:font-bold
                 cursor-pointer">Wishlist</li>

          <CiShoppingCart  className="h-6 size-5" />

          <div className="flex justify-center items-center ml-4 ">
            <FaRegUser className="h-5 w-5" />
          </div>
        </ul>
      </div>

      <div className="flex justify-around font-sans bg-white p-4 items-center shadow-sm shadow-gray-400 ">
        <div>
          <span className="text-3xl" ><Link to={"/"}>HEKTO</Link></span>
        </div>

        <div className="flex gap-9 items-center ">
          {navitemns.map((link, index) => {
            return (
              <li key={index} className="list-none">
                <Link to={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="pt-1.5  pb-1.5 pl-4 pr-4 border-gray-400 border-2"
          />
          <div className="bg-pink-400 h-10 w-10 flex justify-center items-center">
            <button className="cursor-pointer">
              <IoSearchOutline className="  h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
