const MyButton = () => {
  const handleClick = (name) => {
    console.log("me diste click: ", name);
  };

  return <button onClick={() => handleClick("🍎")}>i'am a button</button>;
};

export default MyButton;
