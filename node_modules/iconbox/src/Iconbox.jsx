import React from "react";
import Content from "./content";

const icon_style = {
  width: '1240px',
  overflow: 'hidden',
  margin: '10px auto',
}


function IconBox() {  
  let box = [];
  for (let i=1; i<5; i++) box.push(<Content index={i} />);
  return (
    <div className='icon-box' style={icon_style}>
      {box}
    </div>
  )
}

export default IconBox;