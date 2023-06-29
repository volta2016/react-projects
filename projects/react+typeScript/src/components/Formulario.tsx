import { useState } from "react";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (ev: any) => {
    console.log(ev);
  };

  return (
    <>
      <form autoComplete="off">
        <h2>Formulario</h2>
        <div className="form-box">
          <label htmlFor="">Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-box">
          <label htmlFor="">Nombre:</label>
          <input type="email" name="name" />
        </div>
      </form>
      <pre>{JSON.stringify(formulario)}</pre>
    </>
  );
};

export default Formulario;
