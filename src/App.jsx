import Menu from './components/Menu/index.jsx';
import Star from './components/Star.jsx';
import Toggle from './components/Toggle/index.jsx';

const App = () => {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(on) => {
              return <div className={`box ${on ? 'filled' : ''}`}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  );
};

export default App;
{
  /* <Star onChange={() => {}} />
      <br />
      <Menu onOpen={() => console.log('Menu open event.')}>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => {
            return <Menu.Item key={sport}>{sport} </Menu.Item>;
          })}
        </Menu.Dropdown>
      </Menu> */
}
