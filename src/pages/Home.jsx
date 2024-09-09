import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/dashboard"); // Redirects to the dashboard (protected route)
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 8 }}>
      <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to React Dashboard
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          A modern, responsive, and secure dashboard to manage your applications
          efficiently.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="outlined" color="primary" onClick={handleGetStarted}>
            Go To Dashboard
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
