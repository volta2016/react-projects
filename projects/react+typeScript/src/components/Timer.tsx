import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => setSeconds((s) => s + 1), 1000);
  }, []);

  return (
    <h3>
      Timer: <small>{seconds}</small>
    </h3>
  );
};

export default Timer;
