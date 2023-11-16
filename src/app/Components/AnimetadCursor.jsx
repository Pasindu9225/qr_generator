import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Cursor from "./public/cursor";

function CustomCursor() {
  return (
    <div>
      <AnimatedCursor
        cursor={{
          image: Cursor,
          scale: 1, // You can adjust the scale factor if needed
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default CustomCursor;
