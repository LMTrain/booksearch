import React from "react";

function Col(props) {
  console.log('THIS ARE PROPS COL', props)
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className={size} {...props} />;
}

export default Col;
