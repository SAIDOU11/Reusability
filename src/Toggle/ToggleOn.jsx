import { ToggleContext } from './Toggle.jsx';
import { useContext } from 'react';

const ToggleOn = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

export default ToggleOn;
