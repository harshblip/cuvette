import {React, useState} from 'react'
import cuvette from '../images/cuvette_logo.png';
import profile from '../images/profile.jpg';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className='nav'>
        <img src = {cuvette} className='logo' alt = "greatplace" />
      <button className={darkMode ? 'dark-mode' : 'greeting'}  onClick={toggleDarkMode}>
        Good Morning
      </button>
        <button className='profile'>
            <img src = {profile} width={30} height={30} style={{paddingTop: '5%', paddingRight: '12px'}} alt = "Siddharth Jain"/>
            <p> Siddharth Jain </p>
        </button>
    </div>
  )
}
