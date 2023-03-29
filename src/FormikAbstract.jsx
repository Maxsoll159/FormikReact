import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./components/MyTextInput";

function FormikAbstract() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-blue-500">asdsadasd</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
        }}
        onSubmit={(values) => {
          if(!values){
            alert("Llenar los campos")
            console.log(values)
          }else{
            alert("Wenass")
          }
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
            <MyTextInput label={'Nombre'} name={'nombre'} />
            <MyTextInput label={'Apellido'} name={'apellido'} />
            <MyTextInput label={'Correo'} name={'email'} />

            <button>Cargar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormikAbstract;
