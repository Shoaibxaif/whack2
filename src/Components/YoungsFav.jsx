import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import img11 from "../Assest/img11.png";
import img12 from "../Assest/img12.png";

import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function YounsFav() {
  return (
    <div>
      <Stack direction="row" spacing={2} marginY={2}>
        <a href="/">
          <Item>
            {" "}
            <img src={img11} alt="img7" />{" "}
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "black" }}
              mt={2}
            >
            Trending on instagram
            </Typography>{" "}
          </Item>
        </a>
        <a href="/">
        <Item>
          {" "}
          <img src={img12} alt="img8" />{" "}
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", color: "black" }}
            mt={2}
          >
            All Under ₹999
          </Typography>{" "}
        </Item>
        </a>
        <a href="/">
     
        </a>
      </Stack>
    </div>
  );
}
