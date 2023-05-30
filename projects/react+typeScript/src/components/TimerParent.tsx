import Timer from "./Timer";
const TimerParent = () => {
  const [miliseconds, setMiliseconds] = useState(1000);

  return (
    <>
      <span>milliseconds {1000}</span>

      <button style={{ backgroundColor: "slateblue", margin: "0 16px" }}>
        1000
      </button>
      <button style={{ backgroundColor: "limegreen" }}>1000</button>

      <Timer />
    </>
  );
};

export default TimerParent;
