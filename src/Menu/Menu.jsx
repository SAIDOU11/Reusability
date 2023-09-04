import { useState } from 'react';
import { createContext } from 'react';

const MenuContext = createContext();

const Menu = ({ children }) => {
  // const [open, setOpen] = useState(true);

  // const toggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  return (
    <MenuContext.Provider value={false}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
};

export { Menu, MenuContext };
