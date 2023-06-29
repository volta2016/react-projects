import { useForm } from "../hooks/useForm";

const Formulario2 = () => {
  const { formulario, handleChange } = useForm({
    postal: "direc",
    ciudad: "Lima",
  });

  const { postal, ciudad } = formulario; //unnecessary
  return (
    <>
      <form autoComplete="off">
        <h2>Formulario2</h2>
        <div className="form-box">
          <label htmlFor="">Código Postal:</label>
          <input
            type="text"
            name="postal"
            value={postal}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="">Ciudad:</label>
          <input
            type="text"
            name="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
        </div>
      </form>
      <pre>{JSON.stringify(formulario)}</pre>
    </>
  );
};

export default Formulario2;
