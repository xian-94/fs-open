import React from "react";
import Part from "./Part";

function Content({ content }) {
  return (
    <div>
      {content.map((obj, index) => (
        <Part name={obj.name} exercises={obj.exercises} key={index} />
      ))}
    </div>
  );
}

export default Content;
