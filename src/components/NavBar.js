import React from 'react';
import { FaSquareGithub } from "react-icons/fa6";


const nav = [
  {
    link: "Home",
    route: "#Home",
  },
  {
    link: "About",
    route: "#about",
  },
  {
    link: "Technologies ",
    route: "#technologies ",
  },
  {
    link: "Project",
    route: "#Project",
  },
  {
    link: "Comments",
    route: "#Comment",
  },
];


const mappedNad = nav.map((nav,indx) => (
  (
    <div key={indx} className='m-0 p-0 my-2'>
      <a href={nav.route} className='text-white font-semibold'>{nav.link}</a>
    </div>
  )
));

const NavBar = () => {
  return (
    <div>
      <div className='flex text-center items-center justify-evenly'>
        <p className='text-white font-semibold text-3xl'>Dev<span className='text-green-500'>JayJay</span></p>
        <div className='flex flex-row gap-14'>{mappedNad}</div>
        <div className='my-4'>
          <a href='https://github.com/dev-jayjay'>
            <FaSquareGithub className='bg-white text-green-600 rounded-lg p-0 m-0 w-12 h-12' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
