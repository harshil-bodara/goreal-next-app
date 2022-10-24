import React from 'react'

export default function Difference({quality,premium}) {
  const popupFunction = (popup) => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
return (
    <div className='text-center'>
      <div className="popup text-pink" onClick={popupFunction}>What's the difference?
        <span className="popuptext p-3" id="myPopup">
          <strong>High Quality Views</strong>  <br />
          {quality}
          <br />
          <br />
          <strong>Premium Views</strong>  <br />
          {premium}
        </span>
      </div>
    </div>
  )
}
