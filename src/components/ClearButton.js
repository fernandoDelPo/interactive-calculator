import React from 'react';
import '../assets/stylesheets/ClearButton.css'

const ClearButton = (props) => {
  return (
    <div 
    className='clear-button'
    onClick={props.assignClear}>
        Clear
    </div>
  )
};

export default ClearButton;