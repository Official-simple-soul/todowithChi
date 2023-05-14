import Link from 'next/link';
import React, { useState } from 'react';

const nav = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Info', link: '/info' },
];

function Header() {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#F5F5F5] p-2 md:p-4 text-priBG flex justify-between items-center">
      <div className="logo font-bold">ToDo</div>
      <nav>
        <ul className="flex space-x-6">
          {nav.map((navigation) => (
            <li
              key={navigation.id}
              onClick={() => setActive(navigation.id)}
              className={`${
                navigation.id === active && 'bg-priBG text-white px-4 rounded-md'
              }`}
            >
              <Link href={`${navigation.link}`}>{navigation.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
