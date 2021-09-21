import React, {useState} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';



const AddProjectForm = () => {
    const [openProjForm, setOpenProjForm] = useState(false)

    const handleProjFormOpen = () => {
        setOpenProjForm(true);
      };
    
      const handleProjFormClose = () => {
        setOpenProjForm(false);
      };

    
    return(
        <div id='test'>
            <AddCircleOutlineIcon 
            style={{ fontSize: 45}}
             onClick={handleProjFormOpen}
             />
               <Dialog open={openProjForm} onClose={handleProjFormClose} aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Add A New Project</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="proj-image"
                        label="Image"
                        type="image"
                        variant='outlined'
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="title"
                        variant='outlined'
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="description"
                        variant='outlined'
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="code-repo"
                        label="Code Repository"
                        type="code-repo"
                        variant='outlined'
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="deployed-site"
                        label="Deployed Site"
                        type="deployed-site"
                        variant='outlined'
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="docs"
                        label="Documentation"
                        type="documentation"
                        variant='outlined'
                        fullWidth
                        />
                    </DialogContent>

               </Dialog>
        </div>
    )
}




export default AddProjectForm;