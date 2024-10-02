// components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Header: React.FC = () => (
  <header className="bg-indigo-800 text-white p-4 z-50">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <Link href="/" className="text-xl font-bold mb-2 md:mb-0">MyBlog</Link>
      <SearchBar />
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;