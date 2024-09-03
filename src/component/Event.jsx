import React, { useState } from 'react'

function Event() {

    const [isToggled,setIsToggled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () =>{
        setIsToggled(!isToggled);
    }

    const handleVisible = () => {
        setIsVisible(!isVisible);
      };

  return (
    <div className="container">
      <div className='db'>
        <div style={{marginRight:"20px"}}>
           <button onClick={handleClick} className="toggle-button">
              Color change
           </button>
           <div className={`box ${isToggled ? 'active' :''}`}>
              This box change a color
           </div>
        </div>
        <div>
          <button onClick={handleVisible} className="toggle-button">
              {isVisible ? 'hide' : 'show'} Box
          </button>
             {isVisible && (
          <div className="second-box">
              This box can be hidden or shown
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Event
