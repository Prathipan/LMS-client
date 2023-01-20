import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const res = await axios.get(
      "https://61efbd81732d93001778e565.mockapi.io/books"
    );
    // console.log(res.data);
    setBooks(res.data);
  };

  return (
    <div>
      <Typography
        className="booklist-container m-3"
        variant="h5"
        component="h5"
      >
        Book List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="custom table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.name}>
                <TableCell component="th" scope="row">
                  {book.name}
                </TableCell>
                <TableCell >
                  {book.isbn}
                </TableCell>
                <TableCell >
                  {book.category}
                </TableCell>
                <TableCell >
                  {book.quantity}
                </TableCell>
                <TableCell >
                  {book.availability}
                </TableCell>
                <TableCell >
                  {book.price}
                </TableCell>
                <TableCell >
                  <Button variant="contained">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookList;
