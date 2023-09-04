import { MenuContext } from './Menu.jsx';
import { useContext } from 'react';

const MenuDropdown = ({ children }) => {
  const { open } = useContext(MenuContext);
  return open ? <div className="menu-dropdown">{children}</div> : null;
};

export default MenuDropdown;
