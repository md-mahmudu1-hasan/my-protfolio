import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const linkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-white' : 'text-primary hover:text-white'
  }`;

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-[#e0e0e0]">
      <header className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">Dizer</span>
          <nav className="flex items-center space-x-6">
            <NavLink to="/" end className={linkClasses}>
              About me
            </NavLink>
            <NavLink to="/services" className={linkClasses}>
              Service
            </NavLink>
            <NavLink to="/portfolio" className={linkClasses}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
            <NavLink to="/skills" className={linkClasses}>
              Skills
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
