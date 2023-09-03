import { useState } from 'react';

const Menu = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return <div className="menu">{children}</div>;
};

export default Menu;
