import React from "react";
const box_style = {
  width: '250px',
  margin: '10px 30px',
  fontSize: '14px',
  textAlign: 'center',
  float: 'left'
};
const Content = props => {
  let path = `./icon${props.index}.png`;
  return /*#__PURE__*/React.createElement("div", {
    className: "box",
    style: box_style
  }, /*#__PURE__*/React.createElement("img", {
    src: path,
    alt: "icon"
  }), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
};
export default Content;