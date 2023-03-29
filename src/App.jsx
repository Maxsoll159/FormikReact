import { useFormik } from "formik";

function App() {
  const validate = ({ nombre, apellido, email }) => {
    const errors = {};
    //NO EXISTE
    if (!nombre) {
      errors.nombre = "Requerido";
    } else if (nombre.length >= 15) {
      errors.nombre = "No debe ser mas de 15 caracteres o menos";
    }

    if (!apellido) {
      errors.apellido = "Requerido";
    } else if (apellido.length >= 10) {
      errors.apellido = "No debe ser mas de 10 caracteres o menos";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validate,
  });
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Nombre</label>
      <input
        type="text"
        name="nombre"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.nombre}
      />
      {touched.nombre && errors.nombre && <span>{errors.nombre}</span>}
      <label htmlFor="">Apellido</label>
      <input
        type="text"
        name="apellido"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.apellido}
      />

      {touched.apellido && errors.apellido && <span>{errors.apellido}</span>}
      <label htmlFor="">Correo</label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <button>Cargar</button>
    </form>
  );
}

export default App;
