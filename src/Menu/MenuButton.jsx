import Button from '../Button/Button.jsx';
import { useContext } from 'react';
import { MenuContext } from './Menu.jsx';

const MenuButton = ({ children }) => {
  const { toggleOpen } = useContext(MenuContext);
  return <Button onClick={toggleOpen}>{children}</Button>;
};

export default MenuButton;
