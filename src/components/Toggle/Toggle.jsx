import { createContext, useRef, useEffect, useState } from 'react';

const ToggleContext = createContext();

const Toggle = ({ children, onToggle }) => {
  const [on, setOn] = useState(false);
  const firstRender = useRef(true);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
export { Toggle, ToggleContext };
