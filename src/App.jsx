import Menu from './Menu/index.jsx';
import Toggle from './Toggle/index.jsx';
import Star from './Star/Star.jsx';

const App = () => {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
      </Toggle>
    </>

    // <Menu>
    //   <Menu.Button>Sports</Menu.Button>
    //   <Menu.Dropdown>
    //     {sports.map((sport) => (
    //       <Menu.Item key={sport}>{sport}</Menu.Item>
    //     ))}
    //   </Menu.Dropdown>
    // </Menu>
  );
};

export default App;
