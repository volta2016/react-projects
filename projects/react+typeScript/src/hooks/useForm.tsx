import { ChangeEvent, useState } from "react";

//with arrow function
export const useForm = <T extends object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    handleChange,
    ...formulario,
  };
};

//with function
// export function useForm<T>(initState: T) {
//   const [formulario, setFormulario] = useState(initState);

//   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = target;

//     setFormulario({
//       ...formulario,
//       [name]: value,
//     });
//   };

//   return {
//     formulario,
//     handleChange,
//   };
// }
