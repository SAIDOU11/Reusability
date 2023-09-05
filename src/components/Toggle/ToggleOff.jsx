import { ToggleContext } from './Toggle.jsx';
import { useContext } from 'react';

const ToggleOff = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

export default ToggleOff;
