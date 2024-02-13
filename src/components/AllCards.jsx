import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function AllCards(product) {
  const { title, id, images, description, price } = product;
  const isInCart = useSelector(
    (state) => !!state.cart.products.find((p) => p.id === id)
  );
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addToCart(product));
  };
  return (
    <Card style={{ height: "450px" }}>
      <CardMedia sx={{ height: 250 }} image={images[0]} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          overflow="hidden"
          textOverflow="ellipsis"
          height={35}
        >
          {title}
        </Typography>
        <Typography
          component="div"
          overflow="hidden"
          textOverflow="ellipsis"
          height={70}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleAdd} color={isInCart ? "error" : ""}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
