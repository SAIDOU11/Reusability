import Menu from './components/Menu/index.jsx';
import Star from './components/Star.jsx';

const App = () => {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];
  return (
    <>
      <Star onChange={() => {}} />
      <br />
      <Menu onOpen={() => console.log('Menu open event.')}>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => {
            return <Menu.Item key={sport}>{sport} </Menu.Item>;
          })}
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default App;
