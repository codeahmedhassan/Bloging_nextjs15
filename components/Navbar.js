import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">AhmedBlog</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

