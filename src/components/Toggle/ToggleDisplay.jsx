import { ToggleContext } from './Toggle.jsx';
import { useContext } from 'react';

const ToggleDisplay = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return children(on);
};

export default ToggleDisplay;
