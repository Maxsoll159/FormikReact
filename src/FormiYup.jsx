import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';


function FormiYup() {
  
  const { handleChange, values, handleSubmit, errors, touched, handleBlur, getFieldProps} = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validateYupSchema: Yup.object({
      nombre: Yup.string().max(15, 'debe tener 15 caracteres o menos').required("Es Requerido"),
      apellido: Yup.string().max(15, 'debe tener 15 caracteres o menos').required("Es Requerido"),
      email: Yup.string().email('No tiene un formato Valido')
    })
  });
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Nombre</label>
      <input
        type="text"
        {...getFieldProps('nombre')}
      />
      {touched.nombre && errors.nombre && <span>{errors.nombre}</span>}
      <label htmlFor="">Apellido</label>
      <input
        type="text"
        {...getFieldProps('apellido')}
      />

      {touched.apellido && errors.apellido && <span>{errors.apellido}</span>}
      <label htmlFor="">Correo</label>
      <input
        type="text"
        {...getFieldProps('email')}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <button>Cargar</button>
    </form>
  );
}

export default FormiYup;
