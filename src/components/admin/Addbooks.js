import { TextField } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Addbooks = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues : {
            name : "",
            isbn : "",
            category : "",
            quantity : "",
            available : "" ,
            price : ""
        },
        onSubmit : async(values) => {
            console.log(values)
            const res = await axios.post(
              "https://61efbd81732d93001778e565.mockapi.io/books",values
            );
            navigate("/admin/dashboard");
        }
    })
  return (
    <div className='form-container mt-4'>
        <h3>Add Books</h3>
        <form onSubmit={formik.handleSubmit}>
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
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="isbn"
              name= "isbn"
              label="ISBN"
              onChange={formik.handleChange}
              value={formik.values.isbn}
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="category"
              name= "category"
              label="Category"
              onChange={formik.handleChange}
              value={formik.values.category}
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              name= "quantity"
              label="Quantity"
              onChange={formik.handleChange}
              value={formik.values.quantity}
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="available"
              name= "available"
              label="Available"
              onChange={formik.handleChange}
              value={formik.values.available}
              type="number"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name= "price"
              label="Price"
              onChange={formik.handleChange}
              value={formik.values.price}
              type="number"
              fullWidth
              variant="outlined"
            />
            <input className='btn btn-primary' type="submit" value="Add Book" />
        </form>
        </div>
  )
}

export default Addbooks