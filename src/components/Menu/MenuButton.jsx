import Button from '../Button/Button.jsx';
import { MenuContext } from './Menu.jsx';
import { useContext } from 'react';

const MenuButton = ({ children }) => {
  const { toggleOpen } = useContext(MenuContext);
  return <Button onClick={toggleOpen}>{children}</Button>;
};

export default MenuButton;
