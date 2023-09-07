import { createContext } from 'react';
import useEffectOnUpdate from '../../hooks/useEffectOnUpdate.jsx';
import useToggle from '../../hooks/useToggle.jsx';

const ToggleContext = createContext();

const Toggle = ({ children, onToggle = () => {} }) => {
  const [on, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
export { Toggle, ToggleContext };
