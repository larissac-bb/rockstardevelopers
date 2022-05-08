import * as React from "react";
import "./MainPage.css";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function MainPage(props) {
  const { cartContent, setCartContent } = props;
  console.log(cartContent);
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const setCart = (product) => {
    if (!cartContent?.find((item) => item.id === product.id)) {
      product.amount = 1;
      setCartContent((oldArray) => [...oldArray, product]);
    } else {
      let cartItems = [...cartContent];
      const objIndex = cartItems.findIndex((obj) => obj.id === product.id);
      cartItems[objIndex].amount++;
      setCartContent(cartItems);
    }
  };

  return (
    <div className="content">
      {products ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 14 }}
            sx={{ justifyContent: "center" }}
          >
            {products?.map((product, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card
                  sx={{ maxWidth: 345, height: "100%" }}
                  className="container"
                >
                  <CardMedia
                    component="img"
                    image={product?.image}
                    alt={product?.title}
                    sx={{
                      height: "10em",
                      width: "10em",
                      objectFit: "scale-down",
                      alignContent: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                  />
                  <div className="overlay">
                    <div className="text">
                      {product?.description?.length > 200
                        ? product?.description?.substring(0, 200) + `...`
                        : product?.description}
                    </div>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product?.title}
                    </Typography>
                  </CardContent>
                  <div className="spacer" />
                  <CardActions className="cartButton">
                    <Button
                      size="medium"
                      style={{ color: "#fe4702", fontWeight: "bold" }}
                      onClick={() => setCart(product)}
                    >
                      <span className="cartButtonText">Add to Cart</span>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}
