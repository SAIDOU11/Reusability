import { MenuContext } from './Menu.jsx';
import { useContext } from 'react';

const MenuDropdown = ({ children }) => {
  const value = useContext(MenuContext);
  return value ? <div className="menu-dropdown">{children}</div> : null;
};

export default MenuDropdown;
