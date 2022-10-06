import {useState} from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../AvatarUser/avatar.css'
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

        {isHovering ? (
          <div className='avatar-position'><b><p>Nvidia Account</p></b>
          <b> <p>Nvidia Store Account</p></b>
            
           
          </div>
        )
      :null}
      </div>
    </div>
  );
};

export default App;