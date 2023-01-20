import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Card, CardContent, Paper, Typography } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../context/userContext";

const Viewbook = () => {
    const { user, setUser } = useContext(UserContext);
  const [book, setBooks] = useState(null);
  const navigate = useNavigate();

  const { bookid } = useParams();
  // console.log(bookid)

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

  return (
    <>
      {book ? (
        <>
          <Typography variant="h5" align="center" style={{ marginBottom: 20 }}>
            Book Details
          </Typography>
          <div className="view-book-card">
            <Card className="p-3">
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell variant="head" component="th" width="300">
                        Name
                      </TableCell>
                      <TableCell>{book.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th">
                        ISBN
                      </TableCell>
                      <TableCell>{book.isbn}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th">
                        Category
                      </TableCell>
                      <TableCell>{book.category}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th">
                        Quantity
                      </TableCell>
                      <TableCell>{book.quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th">
                        Available
                      </TableCell>
                      <TableCell>{book.available}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th">
                        Price
                      </TableCell>
                      <TableCell>${book.price}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              { user.includes("admin") ? <Button
                variant="contained"
                onClick={() => navigate(`/admin/editbook/${book.id}`)}
              >
                Edit book
              </Button> : <></>}
              <Button
                style={{
                  backgroundColor: "#9c27b0",
                  borderRadius: "5px",
                  marginLeft: "15px",
                }}
                variant="contained"
                onClick={() => navigate(-1)}
              >
                back
              </Button>
            </Card>
          </div>
        </>
      ) : (
        <h1>Loading ...!</h1>
      )}
    </>
  );
};

export default Viewbook;
