const MenuDropdoxn = ({ items }) => {
  return (
    <div className="menu-dropdown">
      {items.map((item) => (
        <div className="menu-item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default MenuDropdoxn;
