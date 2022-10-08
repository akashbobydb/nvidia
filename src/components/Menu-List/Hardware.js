import React from 'react'
import './hardware.css'
import ListGroup from 'react-bootstrap/ListGroup';
function Hardware() {
  return (
    <div>
         <div className='head'>
            <div className='head-inner'>
        <ListGroup variant='flush'>
            <ListGroup.Item id='head-main'>Gaming and Entertainment</ListGroup.Item>
      <ListGroup><a>Geforce Graphics Card</a></ListGroup>
      <ListGroup><a>Gaming Laptops</a></ListGroup>
      <ListGroup><a>G-SYNC Monitors</a></ListGroup>
      <ListGroup><a>SHIELD</a></ListGroup>
    </ListGroup>
    </div>
    <div className='head-inner'>
    <ListGroup variant='flush'>
            <ListGroup.Item  id='head-main'>Laptops and Workstation</ListGroup.Item>
      <ListGroup><a>Gaming Laptops</a></ListGroup>
      <ListGroup><a>NVIDIA RTX Desktop Workstations</a></ListGroup>
      <ListGroup><a>NVIDIA RTX in Proffesional Laptops</a></ListGroup>
      <ListGroup><a>DGX Stations</a></ListGroup>
      <ListGroup><a>NVIDIA RTX Data Science Workstations</a></ListGroup>
      <ListGroup><a>Studio Laptops</a></ListGroup>
    </ListGroup>
    </div>
    <div className='head-inner'>
    <ListGroup variant='flush'>
            <ListGroup.Item id='head-main'>Cloud and Data Center</ListGroup.Item>
      <ListGroup><a>Geforce Graphics Card</a></ListGroup>
      <ListGroup><a>Gaming Laptops</a></ListGroup>
      <ListGroup><a>G-SYNC Monitors</a></ListGroup>
      <ListGroup><a>SHIELD</a></ListGroup>
    </ListGroup>
    </div>
    <div className='head-inner'>
    <ListGroup variant='flush'>
            <ListGroup.Item id='head-main'>Networking</ListGroup.Item>
      <ListGroup><a>Geforce Graphics Card</a></ListGroup>
      <ListGroup><a>Gaming Laptops</a></ListGroup>
      <ListGroup><a>G-SYNC Monitors</a></ListGroup>
      <ListGroup><a>SHIELD</a></ListGroup>
    </ListGroup>
    </div>
    <div className='head-inner'>
    <ListGroup variant='flush'>
            <ListGroup.Item id='head-main'>GPUs</ListGroup.Item>
      <ListGroup><a>Overview</a></ListGroup>
      <ListGroup><a>DPU</a></ListGroup>
      <ListGroup><a>Ethernet</a></ListGroup>
      <ListGroup><a>InfiniBand</a></ListGroup>
    </ListGroup>
    </div>
    <div className='head-inner'>
    <ListGroup variant='flush'>
            <ListGroup.Item id='head-main'>Embedded Systems</ListGroup.Item>
      <ListGroup><a>Jetson</a></ListGroup>
      <ListGroup><a>DRIVE AGX</a></ListGroup>
      <ListGroup><a>Clara AGX</a></ListGroup>
    </ListGroup>
    </div>
        </div>
    </div>
  )
}

export default Hardware