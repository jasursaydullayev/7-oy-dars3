import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const countOfProducts = useSelector(
    (state) => state.cart.products?.length || 0
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shopping
            </Typography>
            <Link to={"chekout"}>
              <Badge badgeContent={countOfProducts} color="error">
                <LocalGroceryStoreIcon sx={{ cursor: "pointer" }} />
              </Badge>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
