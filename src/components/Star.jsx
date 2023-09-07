import { BsStarFill, BsStar } from 'react-icons/bs';
import useToggle from '../hooks/useToggle.jsx';

const Star = ({ onChange }) => {
  const [on, toggle] = useToggle();
  return (
    <>
      {on ? (
        <BsStarFill onClick={toggle} className="star filled" />
      ) : (
        <BsStar onClick={toggle} className="star" />
      )}
    </>
  );
};

export default Star;
