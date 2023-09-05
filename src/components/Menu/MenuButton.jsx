import Button from '../Button/Button.jsx';
import Toggle from '../Toggle/index.jsx';

const MenuButton = ({ children }) => {
  return (
    <Toggle.Button>
      <Button>{children}</Button>{' '}
    </Toggle.Button>
  );
};

export default MenuButton;
