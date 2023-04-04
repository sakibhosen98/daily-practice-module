import React, { useState } from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact'
    },
    {
      id: 4,
      name: 'Products',
      path: '/products'
    },
    {
      id: 5,
      name: 'Services',
      path: '/services'
    },
    {
      id: 6,
      name: 'Login',
      path: '/Login'
    }
  ];
  
  return (
    <nav className='bg-green-500 px-4'>
        <div onClick={() => setOpen(!open)} className='md:hidden'>
            <span>{open === true? 
            <Bars3Icon className="h-6 w-6 text-red-500" />
            :<XMarkIcon className="h-6 w-6 text-red-500" />
          }</span>
            
        </div>
        <ul className={`md:flex absolute duration-500 pl-8 pb-4 py-2 md:static bg-green-500 ${open ? 'top-6': '-top-48'}`}>
          {
            routes.map(route => <Link 
              route={route}
              key={route.id}
              ></Link>)
          }
        </ul>
    </nav>
  );
};

export default Navbar;