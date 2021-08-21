import React, {useState, useEffect} from 'react'
import {  withFormik, Form, Field} from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import '../styles/signin.scss';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';




const SignIn = () => {



    return(
        <div className='signin-form-container' >
            <h3 className='sign-in-header'>Sign In</h3>
            <Form className='signin-form'>
            <Field
                type='username'
                name='username'
                label='Enter username'
                component={TextField}
                variant='outlined'
                fullWidth
                style={{fontFamily:'Love Ya Like A Sister, cursive'}}
                />
            <Field
                type='password'
                name='password'
                label='Enter password'
                component={TextField}
                variant='outlined'
                fullWidth
                style={{fontFamily:'Love Ya Like A Sister, cursive'}}
                />
            <Button 
                className='signin-form-btn'
                type='submit'
                margin='normal'
                fontSize='small'
                fullWidth
                style={{borderRadius: '15px', fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190'}}
                > Click to Sign in
            </Button>
            </Form >
 
        </div>
    )
}

const FormikMessage = withFormik({
    mapPropsToValues({ username, password}) {
        return{
            username: username || '',
            password: password || '',
     }
},


validationSchema: Yup.object().shape({
    username: Yup.string()
    .required('Must enter valid username'),
    password: Yup.string()
    .required('Must enter valid password'),
    }),

})(SignIn)



export default FormikMessage;

