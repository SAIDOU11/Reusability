import { useRef, useEffect } from 'react';

const useEffectOnUpdate = (effectFunction, arrayDeps) => {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, arrayDeps);
  return;
};

export default useEffectOnUpdate;
