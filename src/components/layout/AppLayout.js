import React, { useContext, useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import BookList from "../booklist/BookList";
import LoginDialog from "../login/LoginDialog";
import AdminDashboard from "../admin/AdminDashboard";
import UserDashboard from "../user/UserDashboard";
import Addbooks from "../admin/Addbooks";
import { UserContext } from "../../context/userContext";
import EditBooks from "../admin/EditBooks";
import Viewbook from "../admin/Viewbook";
import { Avatar } from "@mui/material";

const AppLayout = () => {
  const [open, setOpenLoginDialoug] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setOpenLoginDialoug(false);
  };

  const handleLogout = () => {
    setUser("");
    navigate("/");
  };

  useEffect(() => {
    handleSubmit();
  }, [user]);

  const handleSubmit = () => {
    // setUser(values);
    console.log(user);
    if (user.includes("admin")) {
      navigate("/admin/dashboard");
    } else if (user.includes("guest")) {
      navigate("/user/dashboard");
    }
    // else {
    //   navigate("/");
    //   alert("Invalid user");
    // }
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: "flex", mr: 1 }} />
            <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                }}
              >
                Library Management System
              </Typography>
            </Link>

            {user ? (
              <>
              <Avatar>{user.slice(0,1).toUpperCase()}</Avatar>
              <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => {
                  handleLogout();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
            </Box></>
              
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={() => {
                    setOpenLoginDialoug(true);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/books" exact element={<BookList />} />
        <Route path="*" element={<Navigate to="/books" replace />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/addbooks" element={<Addbooks />} />
        <Route path="/admin/editbook/:bookid" element={<EditBooks />} />
        <Route path="admin/book/:bookid" element={<Viewbook />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
      <LoginDialog
        open={open}
        handleClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AppLayout;
