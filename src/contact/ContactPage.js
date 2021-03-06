import React, {useState, useEffect} from 'react'
import {  withFormik, Form, Field} from 'formik';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import axios from 'axios'
import '../styles/ContactPage.scss';
//dialog for button
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


const ContactPage = ({ errors, touched, values, status }) => {
    
    const [signin, setSignin] = useState([])
        //need status
        useEffect(() => {
            if(status) {
                setSignin([...signin, status])
            }
        }, [status])

//for button dialog
    const [open, setOpen] = useState(false);
     const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
//need to add modal to pop up after form is submitted
    const styles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
    const DialogTitle = withStyles(styles)(props => {
        const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
      </MuiDialogTitle>
    );
  });
  
    const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
     const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  


    return(
    
        <div name='contact' className='contact-container'>

            <Form className='form'>
            <h2 id='contacts-section' className='contact-header'>CONTACT</h2>
            <h3 className='contact-subheader'>Questions? Send me a message!</h3>
            <Field
            className='field'
            type='name'
            name='name'
            label='Enter name here'
            component={TextField} //material-ui-text field
            margin='normal'
            variant='outlined'
            fullWidth
            style={{fontFamily:'Love Ya Like A Sister, cursive'}}
            />
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
            <Field
               className='message'
               type='message'
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
            className='contact-form-button'
            type='submit'
            margin='normal'
            fontSize='small'
            onClick={handleClickOpen}
            fullWidth
            style={{borderRadius: '15px', fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190'}}
            >Submit the form</Button>

          {/* //modal that pops up afer form submission */}
        <Dialog onClose={handleClose}  open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Contact Submission
            </DialogTitle>
            <DialogContent dividers style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190' }}>
                Your form was submitted. Thank you.
            </DialogContent>
            <DialogActions>
             <Button onClick={handleClose} color="primary" style={{borderRadius: '15px', fontFamily:'Love Ya Like A Sister, cursive', color: '#008080'}}>
                Return to website
            </Button>
             </DialogActions>
        </Dialog>
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
    .max(250, 'Message hass exceeded character limit')
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