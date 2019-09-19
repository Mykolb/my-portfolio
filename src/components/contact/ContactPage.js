import React, {useState, useEffect} from 'react'
import {  withFormik, Form, Field} from 'formik';
import { TextField, Select } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import axios from 'axios'
import './ContactPage.css'




const ContactPage = ({ errors, touched, values, status }) => {
    
    const [signin, setSignin] = useState([])
        //need status
        useEffect(() => {
            if(status) {
                setSignin([...signin, status])
            }
        }, [status])

//need to add modal to pop up after form is submitted

    

    return(
        <div className='contact-container'>

            <Form className='form'>
            <h2 className='contact-header'>CONTACT</h2>
            <h3 className='contact-subheader'>Interested? Send me a message!</h3>
            {touched.name && errors.name && <p>{errors.name}</p> }
            <Field
            className='field'
            type='name'
            name='name'
            label='Enter name here'
            component={TextField} //material-ui-text field
            margin='normal'
            variant='outlined'
            fullWidth
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field
            className='field'
            type='email'
            name='email'
            label='Enter email here'
            component={TextField}
            margin='normal'
            variant='outlined'
            fullWidth
            />
            {touched.message && errors.message && <p>{errors.message}</p>}
            <Field
               className='message'
               type='messaage'
               name='message'
               label='Enter your message here'
               component={TextField}
               margin='normal'
               variant='outlined'
               multiline
               rows='4'
               fullWidth
            />
            <Button
            type='submit'
            margin='normal'
            fontSize='small'
            fullWidth
            color='primary'>Submit the form</Button>
             </Form>
            
        </div>
    )
}


const FormikMessage = withFormik({
    mapPropsToValues({ name, email, message }) {
        return{
            name: name || '',
            email: email || '',
            message: message || ''
     }
},


validationSchema: Yup.object().shape({
    name: Yup.string()
    .max(20, 'Name exceeds character limit')
    .required(),
    email: Yup.string()
    .email()
    .required(),
    message: Yup.string()
    .required()
    .max(128, 'Message hass exceeded character limit')
    }),


handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}) {
    if(!values.email) {
        setErrors({ email: 'Please add an email address'})
    } else {
        axios
          .post('https://formspree.io/xwdeljrm', values)
          .then(res => {
            console.log(res.data)
            setStatus();
            resetForm();
            setSubmitting(false);       
          })
          .catch(err => {
              console.log(err)
              setSubmitting(false);
          })
    }
}







})(ContactPage)



export default FormikMessage;