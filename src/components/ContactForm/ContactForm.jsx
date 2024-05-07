import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import css from './ContactForm.module.css'
export default function ContactForm(onAdd){
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    });  
      const dataId = useId();
      const handleSubmit = (e) => {
         e.preventDefault();
        onAdd({
            id: dataId,
            name: e.target.elements.name.value,           
        });
        e.target.reset();
    };        
    return(
        <Formik
    initialValues={{name:"", number:""}}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}>
    <Form className={css.form}>
        <div className={css.div}>
            <label htmlFor={`${dataId}-name`}>Name</label>
            <Field className={css.field} type="text" name="name" id={`${dataId}-name`} />
            <ErrorMessage className={css.span} name="name" component="span" />
        </div>
        <div className={css.div}>
            <label htmlFor={`${dataId}-phone`}>Phone</label>
            <Field className={css.field} type="number" name="number" id={`${dataId}-phone`} />
            <ErrorMessage className={css.span} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">Add contact</button>
    </Form>
</Formik>
    )
}