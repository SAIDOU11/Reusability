import Menu from './Menu/Menu.jsx';
import MenuButton from './Menu/MenuButton.jsx';
import MenuDropdown from './Menu/MenuDropdown.jsx';
import MenuItem from './Menu/MenuItem.jsx';

const App = () => {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map((sport) => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  );
};

export default App;
