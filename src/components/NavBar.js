import React from 'react';


const nav = [
  {
    link: "Home",
    route: "#Home",
  },
  {
    link: "About",
    route: "#About",
  },
  {
    link: "Technologies ",
    route: "#Technologies ",
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
      <a href={nav.route} className='text-white'>{nav.link}</a>
    </div>
  )
));

const NavBar = () => {
  return (
    <div>
      <div className='flex text-center items-center justify-evenly'>
        <p className='text-white font-semibold text-3xl'>Dev<span className='text-green-500'>JayJay</span></p>
        <div className='flex flex-row gap-14'>{mappedNad}</div>
        <div className='text-white'>GitHub</div>
      </div>
    </div>
  );
}

export default NavBar;
