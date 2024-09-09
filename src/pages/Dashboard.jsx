import { Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50% ,-50%)",
      }}
    >
      <Navbar />
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">Welcome to the Dashboard!</Typography>
    </Container>
  );
};

export default Dashboard;
