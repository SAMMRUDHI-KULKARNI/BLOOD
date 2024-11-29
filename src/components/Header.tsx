import React from 'react';
import { Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-red-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Droplet className="h-8 w-8" />
          <span>रक्तADAHAAR</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-red-200">Home</Link></li>
            <li><Link to="/register" className="hover:text-red-200">Register</Link></li>
            <li><Link to="/search" className="hover:text-red-200">Search</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}