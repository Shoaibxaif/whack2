import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import img7 from "../Assest/img7.png";
import img8 from "../Assest/img8.png";
import img9 from "../Assest/img9.png";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewArrival() {
  return (
    <div>
      <Stack direction="row" spacing={2} marginY={2}>
        <a href="/">
          <Item>
            {" "}
            <img src={img7} alt="img7" />{" "}
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "black" }}
              mt={2}
            >
              Hoodies & Sweetshirt
            </Typography>{" "}
          </Item>
        </a>
        <a href="/">
        <Item>
          {" "}
          <img src={img8} alt="img8" />{" "}
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "black" }}
            mt={2}
          >
            Coats & Parkas
          </Typography>{" "}
        </Item>
        </a>
        <a href="/">
        <Item>
          {" "}
          <img src={img9} alt="img9" />{" "}
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "black" }}
            mt={2}
          >
            Tees & T-Shirt
          </Typography>{" "}
        </Item>
        </a>
      </Stack>
    </div>
  );
}
