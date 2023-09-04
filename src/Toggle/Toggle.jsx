import { createContext, useState } from 'react';

const ToggleContext = createContext();

const Toggle = ({ children }) => {
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
