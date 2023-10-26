import React from 'react';
import { IoMdStats } from 'react-icons/io'
import { SlBadge } from 'react-icons/sl'
import { AiOutlineFile } from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <button className='menu'>
           <IoMdStats className='icons' style={{marginRight: '3%'}}/>  Dashboard
        </button>
        <button className='menu1'>
          <SlBadge className='icons' style={{marginRight: '3%'}} />  Skill test
        </button>
        <button className='menu'>
           <AiOutlineFile className='icons' style={{marginRight: '3%'}}/>  Internships 
        </button>
    </div>
  )
}
