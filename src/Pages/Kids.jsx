import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import girl from "../Assest/girl.png";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardActions } from "@mui/material";

const model = [
  {
    id: 1,
    name: "Kids' Cartoon T-Shirt",
    price: 19.99,
    imgSrc: "https://m.media-amazon.com/images/I/71N-1gBsO-L._UY879_.jpg",
  },
  {
    id: 2,
    name: "Kids' Denim Shorts",
    price: 24.99,
    imgSrc: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13705266a.webp",
  },
  {
    id: 3,
    name: "Kids' Sneakers",
    price: 29.99,
    imgSrc: "https://m.media-amazon.com/images/I/71N-58eNnZL._UY695_.jpg",
  },
  {
    id: 4,
    name: "Kids' Hoodie",
    price: 34.99,
    imgSrc: "https://m.media-amazon.com/images/I/91NGF7xl2XL._UX679_.jpg",
  },
  {
    id: 5,
    name: "Kids' Winter Jacket",
    price: 44.99,
    imgSrc: "https://m.media-amazon.com/images/I/71RtCQjZy9L._UY879_.jpg",
  },
  {
    id: 6,
    name: "Kids' Leggings",
    price: 16.99,
    imgSrc: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._UX679_.jpg",
  },
  {
    id: 7,
    name: "Kids' Slip-On Shoes",
    price: 26.99,
    imgSrc: "https://m.media-amazon.com/images/I/81N+poYWWrL._UY695_.jpg",
  },
  {
    id: 8,
    name: "Kids' Pajama Set",
    price: 22.99,
    imgSrc: "https://mackly.com/cdn/shop/products/12_08a79967-e3ca-47cc-8c82-6ce2feed247d_1800x1800.jpg?v=1668676921",
  },
  {
    id: 1,
    name: "Kids' Cartoon T-Shirt",
    price: 19.99,
    imgSrc: "https://m.media-amazon.com/images/I/71N-1gBsO-L._UY879_.jpg",
  },
  {
    id: 2,
    name: "Kids' Denim Shorts",
    price: 24.99,
    imgSrc: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13705266a.webp",
  },
  {
    id: 3,
    name: "Kids' Sneakers",
    price: 29.99,
    imgSrc: "https://m.media-amazon.com/images/I/71N-58eNnZL._UY695_.jpg",
  },
  {
    id: 4,
    name: "Kids' Hoodie",
    price: 34.99,
    imgSrc: "https://m.media-amazon.com/images/I/91NGF7xl2XL._UX679_.jpg",
  },
  {
    id: 5,
    name: "Kids' Winter Jacket",
    price: 44.99,
    imgSrc: "https://m.media-amazon.com/images/I/71RtCQjZy9L._UY879_.jpg",
  },
  {
    id: 6,
    name: "Kids' Leggings",
    price: 16.99,
    imgSrc: "https://m.media-amazon.com/images/I/71G6UQ0ZUeL._UX679_.jpg",
  },
  {
    id: 7,
    name: "Kids' Slip-On Shoes",
    price: 26.99,
    imgSrc: "https://m.media-amazon.com/images/I/81N+poYWWrL._UY695_.jpg",
  },
  {
    id: 8,
    name: "Kids' Pajama Set",
    price: 22.99,
    imgSrc: "https://mackly.com/cdn/shop/products/12_08a79967-e3ca-47cc-8c82-6ce2feed247d_1800x1800.jpg?v=1668676921",
  },
 
];



const defaultTheme = createTheme();


const Kids = () => {
    const buttonStyle = {
        marginTop: "5%",
      };
  return (
    <>

    <Container className="herosection" maxWidth="large">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid xs={6}>
                <Container maxWidth="sm" style={{ height: "62vh" }}>
                  <Typography
                    fontWeight="bold"
                    zIndex={2}
                    variant="h3"
                    component="h2"
                    style={{ lineHeight: 1.5 }}
                    py={"5%"}
                  >
                    LET’S <br />
                    EXPLORE <br />
                    UNIQUE CLOTHES
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    zIndex={2}
                    varient="body2"
                    component="h2"
                    style={{ lineHeight: 1.5 }}
                    py={"auto"}
                  >
                    Live for Influential and Innovative fashion!
                  </Typography>
                  <Button
                    style={buttonStyle}
                    color="secondary"
                    variant="contained"
                    size="medium"
                  >
                    Shop now
                  </Button>
                </Container>
              </Grid>
              <Grid xs={6}>
                <img src={girl} alt="girl" style={{ width: "500px" }} />
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="lg"  height="10vh" style={{ marginTop: '10px' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
          Kids's wear
          </Typography>

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

         
          
        </Container>
        
    </>
  )
}

export default Kids


