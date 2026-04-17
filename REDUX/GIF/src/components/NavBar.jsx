import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='flex justify-between items-center py-6 px-10 bg-blue-600 '>
      
      <NavLink to='/' className='font-semibold text-2xl text-white'>
        MediaSearch
      </NavLink>
        <div className='flex gap-5 items-center'>
      <NavLink 
        to='/' 
        className={({ isActive }) => 
          isActive ? 'text-indigo-400 font-semibold' : 'text-white'
        }
      >
        Search
      </NavLink>

      <NavLink 
        to='/collection' 
        className={({ isActive }) => 
          isActive ? 'text-indigo-400 font-semibold' : 'text-white'
        }
      >
        Collection
      </NavLink>
    </div>
    </div>
  );
}

export default NavBar;
