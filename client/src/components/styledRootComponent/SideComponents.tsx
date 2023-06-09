import { Button, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const SideBox = styled(Box)({
  position: 'fixed',
  width: '240px',
  minHeight: 'calc(100vh - 50px)',
  top: '3.2em',
  backgroundColor: '#FFFFFF',
  borderTop: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px',
});

export const StyledButton = styled(Button)({
  width: '135px',
  height: '35px',
  background: '#2CB674',
  borderRadius: '5px',
  gap: '10px',
  color: '#fff',
  // marginBottom: '30px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#2CB674',
    border: '1px solid #2CB674',
  },
});

export const StyledTypography = styled(Typography)({
  fontSize: '12px',
  width: '80%',
  textAlign: 'center',
});

export const BorderBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& :hover': {
    color: '#2CB674',
  },
});
