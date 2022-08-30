import React, {useState} from 'react';
import {CgMenuRight} from 'react-icons/cg';
import {IoMdClose} from 'react-icons/io';

const Header = () => {
    const [toggle, setToggle]=useState(false);
    const handleToggle=()=>{
        setToggle(!toggle)

    }
  return (
    <div className='xl:hidden'>
        <nav className='grid grid-col bg-black grid-cols-8'>
            <div className='col-span-6 ml-4 mt-2 flex flex-row text-2xl'>
            <p className='text-white'>Fare</p><p className='text-green-500'>well</p><p className='text-white'>.</p>
            </div>

            <div className='grid mt-3 mr-6 justify-end col-span-2'>
               {(!toggle? <CgMenuRight color='white' size='30px' onClick={handleToggle} className='cursor-pointer'/> : <IoMdClose color='white' size='30px' onClick={handleToggle} className='cursor-pointer'/>)} 
            </div>
            
        </nav>
    </div>
  )
}

export default Header