import { useState } from "react";
import Timer from "./Timer";

const TimerParent = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  return (
    <>
      <span>milliseconds {miliseconds}</span>

      <button
        style={{ backgroundColor: "slateblue", margin: "0 16px" }}
        onClick={() => setMiliseconds(1000)}
      >
        1000
      </button>
      <button
        style={{ backgroundColor: "limegreen" }}
        onClick={() => setMiliseconds(2000)}
      >
        2000
      </button>

      <Timer miliseconds={miliseconds} />
    </>
  );
};

export default TimerParent;
