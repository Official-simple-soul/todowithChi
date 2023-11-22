import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const nav = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Info", link: "/info" },
];

function Header() {
  const [active, setActive] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/info/[id]") {
      setActive(2);
    }
  }, [router.pathname]);

  return (
    <div className="bg-priBG p-2 md:p-4 text-priText flex justify-between items-center shadow-md shadow-red-900">
      <div className="logo font-bold">ToDo</div>
      <nav>
        <ul className="flex space-x-6">
          {nav.map((navigation) => (
            <li
              key={navigation.id}
              onClick={() => setActive(navigation.id)}
              className={`${
                navigation.id === active &&
                "bg-yellow-600 text-black px-4 rounded-md"
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
