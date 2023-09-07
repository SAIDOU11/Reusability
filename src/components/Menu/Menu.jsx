import { createContext } from 'react';
import useToggle from '../../hooks/useToggle.jsx';

const MenuContext = createContext();

const Menu = ({ children, onOpen }) => {
  const [open, toggleOpen] = useToggle({
    onToggle: onOpen,
  });

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
};

export { Menu, MenuContext };
