import React from 'react'
import cuvette from '../images/cuvette_logo.png';
import profile from '../images/profile.jpg';

export default function Navbar() {
  return (
    <div className='nav'>
        <img src = {cuvette} className='logo' alt = "greatplace" />
        <button className='profile'>
            <img src = {profile} width={30} height={30} style={{paddingTop: '5%', paddingRight: '12px'}} alt = "Siddharth Jain"/>
            <p> Siddharth Jain </p>
        </button>
    </div>
  )
}
