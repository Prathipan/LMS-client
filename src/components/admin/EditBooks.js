import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBooks = () => {
  const [book, setBooks] = useState(null);

  const { bookid } = useParams();
  // console.log(book);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await axios.get(
      `https://61efbd81732d93001778e565.mockapi.io/books/${bookid}`
    );
    // console.log(res.data);
    setBooks(res.data);
  };

  return <>{book ? <EditFunction book={book} /> : <h1>Loading...</h1>}</>;
};

const EditFunction = ({ book }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: book.name,
      isbn: book.isbn,
      category: book.category,
      quantity: book.quantity,
      available: book.available,
      price: book.price,
    },
    onSubmit: async (values) => {
      // console.log(values)
      const res = await axios.put(
        `https://61efbd81732d93001778e565.mockapi.io/books/${book.id}`,
        values
      );
      navigate("/admin/dashboard");
    },
  });

  return (
    <div className="form-container mt-4">
      <h3>Edit Book</h3>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
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
          name="isbn"
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
          name="category"
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
          name="quantity"
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
          name="available"
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
          name="price"
          label="Price"
          onChange={formik.handleChange}
          value={formik.values.price}
          type="number"
          fullWidth
          variant="outlined"
        />
        <input className="btn btn-primary" type="submit" value="Update" />
        <Button
          style={{
            backgroundColor: "#9c27b0",
            borderRadius : "5px",
            marginLeft : "15px"
          }}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
