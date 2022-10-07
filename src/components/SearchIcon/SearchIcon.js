import {React,useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../SearchIcon/searchicon.css'
function SearchIcon() {
    const [isActive, setIsActive] = useState(false);
  return (
    <div>
       
    <div className="flex items-center space-x-6">
      <div className="cursor-pointer select-none">
       {isActive? <CloseOutlinedIcon onClick={()=>{
          setIsActive(!isActive)}}/>:
      <SearchOutlinedIcon onClick={()=>{
          setIsActive(!isActive)}} />
           }
      </div></div>

    <div className="cursor-pointer select-none">
      {isActive ? <div className='search-icon'><input type="text" placeholder='SEARCH NVIDIA' name="fruit" list="fruits" autocomplete="off" />
<datalist id="fruits">
  <option>Account</option>
  <option>Graphics Card</option>
  <option>AI</option>
  <option>Games</option>
  <option>Shops</option>
</datalist></div>:
         <div onClick={()=>{
       setIsActive(!isActive)}}></div>}
     </div>
    </div>
  )
}

export default SearchIcon