import React from "react";

function Container(props) {
  // console.log('THIS ARE PROPS FROM CONTAINER', props)
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
