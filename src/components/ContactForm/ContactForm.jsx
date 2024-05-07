import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import css from './ContactForm.module.css'
export default function ContactForm(){
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

    });  
    const initialValues={
        name: "",
        number: ""
      }
      const nameFieldId = useId();
      const numberFieldId = useId();

        const handleSubmit = (values, actions) => {
              actions.resetForm();
          };



    return(
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
        <Form className={css.form}>
        
        <div className={css.div}><label htmlFor={nameFieldId}>Name</label>
        
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.span} name="name" component="span" />
        </div>
        <div className={css.div}><label htmlFor={numberFieldId}>Phone</label>
        <Field className={css.field} type="number" name="number" id={numberFieldId} />
        <ErrorMessage className={css.span} name="number" component="span" /></div>
            <button className={css.btn} type="submit">Add contact</button>
			</Form>
      </Formik>
    )
}