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

export default function MainPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=18")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

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
                <Card sx={{ maxWidth: 345, height: "100%" }}>
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
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product?.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {product?.description}
                    </Typography> */}
                  </CardContent>
                  <CardActions className="cartButton">
                    <Button size="small" style={{ color: "#fe4702" }}>
                      Add to Cart
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
