import { ToggleContext } from './Toggle.jsx';
import { useContext } from 'react';

const ToggleButton = ({ children }) => {
  const { toggle } = useContext(ToggleContext);
  return <div onClick={toggle}>{children} </div>;
};

export default ToggleButton;
