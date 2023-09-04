import { useState } from 'react';
import { createContext } from 'react';

const MenuContext = createContext();

const Menu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
};

export { Menu, MenuContext };
