import React from 'react';

function Status(){
  const customStyle={
   background: "transparent",
   display: "block",
   fontFamily: "'Helvetica', Arial, sans-serif",
   color: "black",
   fontSize: "60px",
   fontWeight: "bold",
   textAlign: "center",
   lineHeight: "calc(80vh - 80px)",
   position: "absolute",
   top: "0",
   bottom: "0",
   left: "0",
   right: "0",
   transition: "all 250ms ease-in-out 0s"
  }
  return(
    <div className={customStyle}>
    Drop here
    </div>
  )
}
export default Status;
