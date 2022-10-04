import {React,useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './searchicon.css'
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
      {isActive ? <div className='search-icon' onClick={()=>{
       setIsActive(!isActive)}}><input type="text" /></div>:
         <div onClick={()=>{
       setIsActive(!isActive)}}></div>}
     </div>
    </div>
  )
}

export default SearchIcon