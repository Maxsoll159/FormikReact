import { useField } from "formik";
/*p
para typeStrip
interface Props{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password',
    placeholder?: string,
    [x:string] : string
}*/

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" {...field} {...props}/>
      {
        meta.touched && meta.error && (
            <span>{meta.error}</span>
        )
      }
    </> 
  );
};
