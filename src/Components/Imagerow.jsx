import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import img1 from "../Assest/img1.png"
import img2 from "../Assest/img2.png"
import img3 from "../Assest/img3.png"
import img4 from "../Assest/img4.png"
import img5 from "../Assest/img5.png"
import img6 from "../Assest/img6.png"

const Item = styled(Paper)(({ theme }) => ({

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Imagerow() {
  return (
    <div>
      <Stack direction="row" spacing={2} marginY={2}>
        <Item>  <img src={img1} alt="img1"  /> </Item>
        <Item>  <img src={img2} alt="img2"  /> </Item>
        <Item>  <img src={img3} alt="img3"  /> </Item>
        <Item>  <img src={img4} alt="img4"  /> </Item>
        <Item>  <img src={img5} alt="img5"  /> </Item>
        <Item>  <img src={img6} alt="img6"  /> </Item>
        
      </Stack>
    </div>
  );
}
