import Toggle from '../Toggle/index.jsx';

const Menu = ({ children }) => {
  return (
    <Toggle>
      <div className="menu">{children}</div>
    </Toggle>
  );
};

export default Menu;
