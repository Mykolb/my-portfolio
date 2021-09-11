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
import Logo from '../assets/logo-no-url.png';




const SignIn = () => {

        const [btnText, setBtnText] = useState('Click to sign in')

        const onFormSubmit = () => {
            setBtnText('Signing In...')
        }

    return(
        <div className='signin-form-container' >
            <section className='signin-image-container'>
            <img src={Logo} alt='site-logo' className='signin-image'/>
            </section>
            <Form className='signin-form'>
            <h3 className='sign-in-header'>Sign In</h3>
            <Field
                type='username'
                name='username'
                label='Username'
                component={TextField}
                variant='standard'
                fullWidth
                className='signin-input'
                style={{fontFamily:'Love Ya Like A Sister, cursive'}}
                />
            <Field
                type='password'
                name='password'
                label='Password'
                component={TextField}
                variant='standard'
                fullWidth
                className='signin-input'
                style={{fontFamily:'Love Ya Like A Sister, cursive'}}
                />
            <Button 
                className='signin-form-btn'
                type='submit'
                margin='normal'
                fontSize='small'
                fullWidth
                // style={{borderRadius: '15px', fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190',  height: '40px', marginTop: '3%'}}
                onClick={(() => onFormSubmit())}
                > {btnText}
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

