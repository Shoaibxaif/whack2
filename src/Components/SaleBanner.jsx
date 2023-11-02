import React from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import img10 from "../Assest/img10.png";
import Button from "@mui/material/Button";

const SaleBanner = () => {
  const buttonStyle = {
    marginTop: "5%",
  };
  return (
    <Container className="herosection" maxWidth="large" sx={{ mt: "30px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={6}>
            <img src={img10} alt="girl" style={{ width: "500px" }} />
          </Grid>
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
                PAYDAY
                <br />
                SALE NOW <br />
              </Typography>
              <Typography
                fontWeight="bold"
                zIndex={2}
                varient="body2"
                component="h2"
                style={{ lineHeight: 1.5 }}
                py={"auto"}
              >
                Spend minimal $100 get 30% off <br />
                voucher code for your next purchase
              </Typography>
              <Typography
              marginTop={2}

                fontWeight="600px"
                zIndex={2}
                varient="body1"
                component="h2"
                style={{ lineHeight: 1.5 }}
                py={"auto"}
              >
                1 June - 10 June 2021 <br />
                *Terms & Conditions apply
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
        </Grid>
      </Box>
    </Container>
  );
};

export default SaleBanner;
