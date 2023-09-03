import { useState } from 'react';
import MenuButton from './MenuButton.jsx';
import MenuDropdown from './MenuDropdown.jsx';

const Menu = ({ buttonText = 'Menu', items }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <MenuButton buttonText={buttonText} onClick={toggle} />
      {open && <MenuDropdown items={items} />}
    </div>
  );
};

export default Menu;
