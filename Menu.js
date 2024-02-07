import React from "react";

function Menu({ onSelectVideo }) {
  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  };
  return (
    <form>
      <input type="radio" name="src" value="fast" onChange={clickHandler} />{" "}
      fast
      <input
        type="radio"
        name="src"
        value="slow"
        onChange={clickHandler}
      />{" "}
      slow
      <input
        type="radio"
        name="src"
        value="cute"
        onChange={clickHandler}
      />{" "}
      cute
      <input type="radio" name="src" value="eek" onChange={clickHandler} /> eek
    </form>
  );
}

export default Menu;
