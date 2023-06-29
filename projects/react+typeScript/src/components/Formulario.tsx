import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

const Formulario = () => {
  const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
    email: "contacto@voltauxui.cl",
    nombre: "Kyo",
    edad: 20,
  });

  //const { email, nombre, edad } = formulario;//unnecessary;
  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   nombre: "",
  // });

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;

  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <form autoComplete="off">
        <h2>Formulario</h2>
        <div className="form-box">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-box">
          <label htmlFor="">Edad:</label>
          <input
            type="number"
            name="edad"
            value={edad}
            onChange={handleChange}
          />
        </div>
      </form>
      <pre>{JSON.stringify(formulario)}</pre>
    </>
  );
};

export default Formulario;
