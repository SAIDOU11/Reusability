import Button from '../Button/Button.jsx';

const MenuButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default MenuButton;
