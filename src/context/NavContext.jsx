import React, { Children, createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
export const NavbarContext = createContext();
export const NavColorContext = createContext();

const NavContext = ({children}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState('white');
  const navLocate = useLocation().pathname;
  useEffect(function(){
    if(navLocate == '/projects' || navLocate =='/agency'){
      setNavColor('black');
    } else {
      setNavColor('white');
    }
  },[navLocate])

  return (
    <div>
      <NavbarContext.Provider value={[navOpen,setNavOpen]}>
        <NavColorContext.Provider value={[navColor,setNavColor]}>
          {children}
        </NavColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext