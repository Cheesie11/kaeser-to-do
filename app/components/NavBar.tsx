"use client";
import Link from 'next/link';
import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const NavBar = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <ul className="flex justify-between pt-6 items-center text-lg">
        {/* Logo */}
        <div>
          <Link href="/">
            <li className="font-bold text-3xl">To-Do Tool 🧀</li>
          </Link>
        </div>

        {/* Theme Dropdown */}
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-lg m-1 text-xl">
            Themes
          </div>
          <ul tabIndex={0} className="bg-base-200 dropdown-content menu rounded-box z-1 w-52 p-4 shadow-sm text-xl">
            <li><a onClick={() => changeTheme('light')}>Light</a></li>
            <li><a onClick={() => changeTheme('dark')}>Dark</a></li>
            <li><a onClick={() => changeTheme('retro')}>Retro</a></li>
            <li><a onClick={() => changeTheme('cupcake')}>Cupcake</a></li>
            <li><a onClick={() => changeTheme('lofi')}>Lofi</a></li>
            <li><a onClick={() => changeTheme('garden')}>Garden</a></li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
