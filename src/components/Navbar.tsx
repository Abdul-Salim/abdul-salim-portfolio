import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About',
      link: '/',
    },
    {
      title: 'Experience',
      link: '/',
    },
    {
      title: 'Projects',
      link: '/',
    },
    {
      title: 'Contact',
      link: '/',
    },
  ];
  return (
    <div className="flex h-[60px] w-full items-center justify-between bg-white px-10">
      <div className="w-1/2">
        <p className="flex w-fit rounded-full border p-2 font-bold">AS</p>
      </div>
      <div className="flex w-1/2 justify-evenly">
        {links?.map((link) => (
          <Link href={link?.link}>
            <p className="font-semibold">{link?.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
