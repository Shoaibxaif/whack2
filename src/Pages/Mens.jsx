import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import girl from "../Assest/girl.png";
import Button from "@mui/material/Button";
import Outfit from "../Components/Outfit";



const Mens = () => {
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
            Menswear
          </Typography>

          <Container   maxWidth="lg"   style={{ marginTop: '10px' }} ></Container>

          <Outfit/>
          
        </Container>
        
    </>
  )
}

export default Mens
