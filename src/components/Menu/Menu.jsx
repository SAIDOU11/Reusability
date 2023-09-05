import Toggle from '../Toggle/index.jsx';

const Menu = ({ children, onOpen }) => {
  return (
    <Toggle onToggle={onOpen} >
      <div className="menu">{children}</div>
    </Toggle>
  );
};

export default Menu;
