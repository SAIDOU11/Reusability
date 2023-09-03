import Button from '../Button/Button.jsx';

const MenuButton = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText} </button>;
};

export default MenuButton;
