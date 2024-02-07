// Import necessary React module
import React from "react";

// Menu component to display radio buttons for video selection
function Menu({ onSelectVideo }) {
  // Function to handle radio button selection
  const clickHandler = (event) => {
    const name = event.target.value;
    onSelectVideo(name);
  };

  // Render a form with radio buttons for video options
  return (
    <form>
      <input
        type="radio"
        name="src"
        value="fast"
        onChange={clickHandler}
      />{" "}
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
      <input
        type="radio"
        name="src"
        value="eek"
        onChange={clickHandler}
      />{" "}
      eek
    </form>
  );
}

// Export the Menu component
export default Menu;

