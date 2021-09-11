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
        }, [status, signin])

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
        const { children, classes } = props;
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
             <section className='contact-info'>
             <h3>Contact Info:</h3>
             <p><i className="fa fa-regular fa-envelope"></i> msmykolbenning@gmail.com</p>
             <p><i className="fa fa-solid fa-map-pin"></i> Charlotte, NC</p>
            </section>
            <Form className='form'>
            <Field
            type='name'
            name='name'
            label='Your name'
            component={TextField} //material-ui-text field
            margin='dense'
            variant='standard'
            style={{fontFamily:'Love Ya Like A Sister, cursive', width: '47%', margin: '1%'}}
            />
         
            <Field
            type='email'
            name='email'
            label='Your email'
            component={TextField}
            margin='dense'
            variant='standard'
            style={{ width: '47%', margin: '1%'}}
            />
            <Field
               className='message'
               type='message'
               name='message'
               label='Your message'
               component={TextField}
               margin='dense'
               variant='standard'
               multiline
               rows='4'
               style={{width: '97%', margin: '1%'}}
            />
            <Button
            className='contact-form-button'
            type='submit'
            margin='normal'
            fontSize='small'
            onClick={handleClickOpen}
            >Submit the form</Button>

          {/* //modal that pops up afer form submission */}
        <Dialog onClose={handleClose}  open={open}>
            <DialogContent onClose={handleClose} dividers style={{fontFamily:'Love Ya Like A Sister, cursive', color: '#B3A190', borderTop: 'none', borderBottom: 'none' }}>
                Your form was submitted. I'll be in touch soon!
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
    .max(500, 'Message must be 500 characters or less')
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