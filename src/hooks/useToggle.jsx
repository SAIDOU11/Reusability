import { useState } from 'react';
import useEffectOnUpdate from './useEffectOnUpdate.jsx';

const useToggle = ({ initialValue = false, onToggle = () => {} }) => {
  const [on, setOn] = useState(initialValue);

  const toggle = () => {
    setOn((prev) => !prev);
  };

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle];
};

export default useToggle;
