import React, { useRef } from "react";
import ImperativeHookBtn from "./ImperativeHookBtn";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <ImperativeHookBtn ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;