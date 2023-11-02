import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";


import { CardActions } from "@mui/material";

const model = [
  {
    id: 1,
    name: "Men's Cotton T-Shirt",
    price: 29.99,
    imgSrc: "https://thehouseofrare.com/cdn/shop/products/IMG_0346_504134d2-acc2-4e64-ac3f-efcbb2a06703_765x.jpg?v=1678710846",
  },
  {
    id: 2,
    name: "Men's Slim-Fit Jeans",
    price: 49.99,
    imgSrc: "https://rockstarjeans.com/cdn/shop/products/RDQ0003_1_1400x.jpg?v=1673620233",
  },
  {
    id: 3,
    name: "Men's  Sneakers",
    price: 39.99,
    imgSrc: "https://m.media-amazon.com/images/I/61++1-R25gL._UX695_.jpg",
  },
  {
    id: 4,
    name: "Men's Dress Shirt",
    price: 59.99,
    imgSrc: "https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg",
  },
  {
    id: 5,
    name: "Men's Winter Jacket",
    price: 79.99,
    imgSrc: "https://m.media-amazon.com/images/I/71IPX82oUDL._UY879_.jpg",
  },
  {
    id: 6,
    name: "Men's  Sweatshirt",
    price: 34.99,
    imgSrc: "https://m.media-amazon.com/images/I/41vABBIr6ZL._UX679_.jpg",
  },
  {
    id: 7,
    name: "Men's Chino Pants",
    price: 44.99,
    imgSrc: "https://pantproject.com/cdn/shop/products/Chinos20220346_8bdc18d0-3fd6-46f8-85f9-9b0616fe9ff4_1024x.jpg?v=1677664204",
  },
  {
    id: 8,
    name: "Men's Running Shoes",
    price: 54.99,
    imgSrc: "https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg",
  },
  {
    id: 9,
    name: "Men's Cotton T-Shirt",
    price: 29.99,
    imgSrc: "https://thehouseofrare.com/cdn/shop/products/IMG_0346_504134d2-acc2-4e64-ac3f-efcbb2a06703_765x.jpg?v=1678710846",
  },
  {
    id: 10,
    name: "Men's Slim-Fit Jeans",
    price: 49.99,
    imgSrc: "https://rockstarjeans.com/cdn/shop/products/RDQ0003_1_1400x.jpg?v=1673620233",
  },
  {
    id: 11,
    name: "Men's  Sneakers",
    price: 39.99,
    imgSrc: "https://m.media-amazon.com/images/I/61++1-R25gL._UX695_.jpg",
  },
  {
    id: 12,
    name: "Men's Dress Shirt",
    price: 59.99,
    imgSrc: "https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg",
  },
  {
    id: 13,
    name: "Men's Winter Jacket",
    price: 79.99,
    imgSrc: "https://m.media-amazon.com/images/I/71IPX82oUDL._UY879_.jpg",
  },
  {
    id: 14,
    name: "Men's  Sweatshirt",
    price: 34.99,
    imgSrc: "https://m.media-amazon.com/images/I/41vABBIr6ZL._UX679_.jpg",
  },
  {
    id: 15,
    name: "Men's Chino Pants",
    price: 44.99,
    imgSrc: "https://pantproject.com/cdn/shop/products/Chinos20220346_8bdc18d0-3fd6-46f8-85f9-9b0616fe9ff4_1024x.jpg?v=1677664204",
  },
  {
    id: 16,
    name: "Men's Running Shoes",
    price: 54.99,
    imgSrc: "https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg",
  },
 
];



const defaultTheme = createTheme();

export default function Outfit() {
  const buttonStyle = {
    marginTop: "5%",
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {model.map((model) => (
              <Grid item key={model.id} xs={12} sm={4} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "100%",
                    }}
                    image={model.imgSrc}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="body1" component="h2">
                      {model.name}
                    </Typography>
                    <Typography variant="body2">${model.price}</Typography>
                    <CardActions>
                      <Button
                        style={buttonStyle}
                        color="secondary"
                        variant="contained"
                        size="medium"
                        
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
