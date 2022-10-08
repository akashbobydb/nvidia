import React, { useState } from 'react'
import './hardware.css'
import '../Menu-List/Hardware.js'
import Hardware from '../Menu-List/Hardware.js'
import Software from '../Menu-List/Software.js'
function Menu() {
    const [hard, setHard] = useState(true)
    const [Soft, setSoft] = useState(false)
  return (
    <div>
        <div className='hs'>
            <a onClick={()=>{setHard(!hard);setSoft(false) }}>Hardware</a>
            <a onClick={()=>{setSoft(!Soft);setHard(false)}}>Software</a>
        </div>
        { hard ? <Hardware/>  : null}
        {Soft ? <Software/> : null} 
        </div>
  )
}

export default Menu