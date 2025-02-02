import React from "react";
import Content from "./content";
const icon_style = {
  width: '1240px',
  overflow: 'hidden',
  margin: '10px auto'
};
function IconBox() {
  let box = [];
  for (let i = 1; i < 5; i++) box.push(/*#__PURE__*/React.createElement(Content, {
    index: i
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "icon-box",
    style: icon_style
  }, box);
}
export default IconBox;