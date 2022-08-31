import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {CgMenuRight} from 'react-icons/cg';
import {IoMdClose} from 'react-icons/io';

const Header = () => {
    const [toggle, setToggle]=useState(false);
    const handleToggle=()=>{
        setToggle(!toggle)

    }

  return (
    <div className='xl:hidden'>
        <div className='grid grid-col bg-black grid-cols-8'>
            
            <div className='col-span-6 ml-4 mt-2 flex flex-row text-2xl'>
              <nav><Link to='/' className='text-white'>Fare well.</Link></nav>
            </div>

            <div className='grid mt-3 mr-6 justify-end col-span-2'>
               {(!toggle? <CgMenuRight color='white' size='30px' onClick={handleToggle} className='cursor-pointer'/> : <IoMdClose color='white' size='30px' onClick={handleToggle} className='cursor-pointer'/>)} 
            </div>
            
        </div>
    </div>
  )
}

export default Header