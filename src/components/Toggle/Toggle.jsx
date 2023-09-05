import { createContext, useEffect, useState } from 'react';

const ToggleContext = createContext();

const Toggle = ({ children, onToggle }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
export { Toggle, ToggleContext };
