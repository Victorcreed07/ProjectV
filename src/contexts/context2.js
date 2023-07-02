import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();



export const GlobalProvider = ({ children }) => {

	const [activeMenu, setActiveMenu] = useState(true);
  const [user1,setUser1] = useState(true)
  const [pano,setPano] = useState({
    Designation:'',
    No:''
  })
	 

  //     const setMode = (e) => {
  //   setCurrentMode(e.target.value);
  //   localStorage.setItem('themeMode', e.target.value);
  // };

  // const setColor = (color) => {
  //   setCurrentColor(color);
  //   localStorage.setItem('colorMode', color);
  // };

  

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{user1,setUser1,pano,setPano}}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);