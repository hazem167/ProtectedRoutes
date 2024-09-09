import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
        <Button sx={{padding:"8px"}} variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
  );
};

export default Navbar;
