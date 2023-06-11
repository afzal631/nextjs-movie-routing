"use client";
import Link from "next/link";
import React, { useState } from "react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div>
//       <nav className="flex items-center justify-between bg-black text-white p-6">
//         <div className="flex items-center flex-shrink-0 text-white mr-6">
//           <Link href={"/"}>
//             <span className="font-semibold text-xl tracking-tight">
//               THEMOVIEDB
//             </span>
//           </Link>
//         </div>
//         <div className="block lg:hidden">
//           <button
//             className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="fill-current h-3 w-3"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Menu</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } w-full lg:flex lg:flex-grow lg:items-center lg:w-auto`}
//         >
//           <div className="flex text-sm lg:flex-grow items-center">
//             <a
//               href="/nowPlaying"
//               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//             >
//               Now playing
//             </a>
//             <a
//               href="/topRated"
//               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//             >
//               Top rated
//             </a>
//             <a
//               href="/upcoming"
//               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
//             >
//               Upcoming
//             </a>
//             <div className="px-2">
//               <a
//                 href="#"
//                 className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
//               >
//                 Sign Up
//               </a>
//               {/* <a
//                 href="#"
//                 className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
//               >
//                 Login
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold">MOVIEDB</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center flex justify-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li
                className="text-white hover:text-blue-600"
                onClick={() => setNavbar(!navbar)}
              >
                <Link href="/nowPlaying">Now Playing</Link>
              </li>
              <li
                className="text-white hover:text-blue-600"
                onClick={() => setNavbar(!navbar)}
              >
                <Link href="/topRated">Top Rated</Link>
              </li>
              <li
                className="text-white hover:text-blue-600"
                onClick={() => setNavbar(!navbar)}
              >
                <Link href="/Upcoming">Upcoming</Link>
              </li>
              <li
                className="text-white hover:text-blue-600"
                onClick={() => setNavbar(!navbar)}
              >
                <Link href="/">Contact US</Link>
              </li>
              <li>
                <div className="lg:px-2">
                  <a
                    href="#"
                    className="inline-block text-sm px-4 py-2 leading-none border  rounded text-white border-white hover:border-transparent hover:text-black hover:bg-green-200  lg:mt-0"
                  >
                    Sign Up
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
