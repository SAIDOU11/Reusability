import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const Star = () => {
  const [starred, setStarred] = useState(false);

  const toggle = () => {
    setStarred((prevStarred) => !prevStarred);
  };

  return starred ? (
    <BsStarFill className="star filled" onClick={toggle} />
  ) : (
    <BsStar className="star" onClick={toggle} />
  );
};

export default Star;
