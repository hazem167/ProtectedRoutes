import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirects to home page or any other desired route
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Box>
        <Typography variant="h1" color="primary" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
