import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '85vh',
});

const StyledH1 = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  // Adjust other styles as needed
  fontWeight: 'bold',
  textAlign: 'center',
}));

function Cart() {
  return (
    <StyledContainer maxWidth="md">
      <StyledH1 variant="h1">
        No item Added yet
      </StyledH1>
    </StyledContainer>
  );
}

export default Cart;
