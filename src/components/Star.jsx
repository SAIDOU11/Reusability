import Toggle from './Toggle/index.jsx';
import { BsStarFill, BsStar } from 'react-icons/bs';

const Star = ({ onChange }) => {
  return (
    <Toggle onToggle={onChange}>
      <Toggle.Button>
        <Toggle.On>
          <BsStarFill className="star filled" />
        </Toggle.On>
        <Toggle.Off>
          <BsStar className="star" />
        </Toggle.Off>
      </Toggle.Button>
    </Toggle>
  );
};

export default Star;
