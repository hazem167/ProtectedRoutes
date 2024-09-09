import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("none");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "hazem" && password === "1234") {
      localStorage.setItem("authToken", "your-token");
      navigate("/dashboard");
    } else {
      setAlert("flex");
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            mt: 8,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50% ,-50%)",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Container>
      <Alert
        severity="error"
        sx={{
          position: "absolute",
          bottom: "40px",
          left: "5px",
          display: alert,
        }}
      >
        Your Are unAuthenticated
      </Alert>
    </>
  );
};

export default Login;
