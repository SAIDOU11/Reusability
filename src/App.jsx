import Menu from './Menu/Menu.jsx';
import MenuButton from './Menu/MenuButton.jsx';
import MenuDropdown from './Menu/MenuDropdown.jsx';

const App = () => {
  return (
    <Menu>
      <MenuButton buttonText="Sports" />
      <MenuDropdown items={['Tennis', 'Racquetball', 'Squash']} />
    </Menu>
  );
};

export default App;
