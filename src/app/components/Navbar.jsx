import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink'

const navLinks = [
  {title: "About", path: "#about"},
  {title: "Projects", path: "#projects"},
  {title: "Timeline", path: "#timeline"},
]


const Navbar = () => {
  return (
    <nav className="bg-[#111111] fixed top-0 left-0 right-0 z-10 bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="text-5xl text-white font-semibold">:)</Link>
        <div className="menu">
          <ul className="flex p-0 md:p-0 sm:flex-row">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title}>
                    {link.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
