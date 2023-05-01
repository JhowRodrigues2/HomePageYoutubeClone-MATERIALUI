import React, { createContext, useState } from "react";
export const GlobalContext = createContext({});


const GlobalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <GlobalContext.Provider value={{ open, handleDrawerToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
