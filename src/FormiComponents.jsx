import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormiComponents() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">assd</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .max(15, "debe tener 15 caracteres o menos")
            .required("Es Requerido"),
          apellido: Yup.string()
            .max(15, "debe tener 15 caracteres o menos")
            .required("Es Requerido"),
          email: Yup.string().email("No tiene un formato Valido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="">Nombre</label>
            <Field name="nombre" type="text" className="wenas" />
            <ErrorMessage name="nombre" component="span" />

            <label htmlFor="">Apellido</label>
            <Field name="apellido" type="text" />
            <ErrorMessage name="apellido" component="span" />

            <label htmlFor="">Correo</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <button>Cargar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormiComponents;
