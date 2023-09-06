import Toggle from '../Toggle/index.jsx';

const MenuDropdown = ({ children }) => {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>
    </Toggle.On>
  );
};

export default MenuDropdown;
