import React from 'react'

export default function Difference({quality,premium}) {
  const popupFunction = (popup) => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
return (
    <div style={{ textAlign: "center" }}>
      <div className="popup" onClick={popupFunction} style={{ color: "#E54196" }}>What's the difference?
        <span className="popuptext" id="myPopup" style={{ padding: "10px" }}>
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
