import React from "react";
import './style.css';
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import girl from "../Assest/girl.png";
import Button from "@mui/material/Button";
import Imagerow from "../Components/Imagerow";
import NewArrival from "../Components/NewArrival";
import SaleBanner from "../Components/SaleBanner";
import YounsFav from "../Components/YoungsFav";


const Home = () => {
  const buttonStyle = {
    marginTop: "5%",
  };
  return (
    <>
      <Container maxWidth="xl">
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

        <Container
          sx={{
            height: "100px",
          }}
          maxWidth="lg"
        >
          <Imagerow />
        </Container>
        <Container maxWidth="lg"  height="10vh" style={{ marginTop: '10px' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            New Arrival
          </Typography>
          <NewArrival/>
        </Container>
        <Container maxWidth="lg"  style={{ marginTop: '10px' }}>
          <SaleBanner/>
        </Container>
        <Container maxWidth="lg"  style={{ marginTop: '10px' }} >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            Young's Favorite
          </Typography>
         <YounsFav/>
        </Container>
      </Container>
    </>
  );
};

export default Home;
