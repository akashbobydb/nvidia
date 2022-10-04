import {useState} from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './avatar.css'
const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <AccountCircleOutlinedIcon/>
        </div>

        {isHovering && (
          <div className='avatar-position'>
           
            <p>Nvidia Account</p>
            <p>Nvidia Store Account</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;