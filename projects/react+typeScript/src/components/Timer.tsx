import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  miliseconds: number;
};

const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<number>();

  console.log(miliseconds);

  useEffect(() => {
    console.log("useEffect");
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setSeconds((s) => s + 1), miliseconds);
  }, [miliseconds]);

  return (
    <h3>
      Timer: <small>{seconds}</small>
    </h3>
  );
};

export default Timer;
