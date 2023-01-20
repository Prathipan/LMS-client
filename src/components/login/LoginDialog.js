import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useFormik } from 'formik';
import { UserContext } from "../../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginDialog = ({ open, handleClose,handleSubmit }) => {


  const {user,setUser} = useContext(UserContext);
    const formik = useFormik({
      initialValues : {
         name: "",
         password: ""
      },
      onSubmit : (values,{resetForm}) => {
          setUser(values.name);
          console.log(user);
          handleSubmit();
          resetForm({values:""});
      }
    })

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle>Login</DialogTitle> 
        <div className="credentials">
        <p> name : admin (or) guest </p><p> password : admin (or) guest</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name= "name"
              label="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="password"
              name="password"
              label="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" onClick={handleClose}>
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
