import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const arrowStyle = {};

export const ArrowStyle = styled(Box)({
  width: '35px',
  height: '35px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: 'white',
  fontSize: '34px',
  transition: '0.5s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: '#01031C',
    scale: '1.1',
  },
});

export const ThumbnailImage = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  gap: '3%',
  backgroundRepeat: 'no-repeat',
  width: '23%',
  height: '80px',
  transition: '0.4s',
  borderRadius: '5px',
  border: '1px solid #CCC',
});

export const ThumbnailBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const SliderImage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

export const SliderBox = styled(Box)({
  width: 'calc(100% - 240px)',
  // width: 'calc(100% - 320px)',
  borderRadius: '5px',
  height: '75vh',
});

export const BioBox = styled(Box)({
  width: '350px',
  ml: '3%',
  padding: '10px',
  border: '1px solid #ccc',
  backgroundColor: '#F2FCF5',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  borderRadius: '3px',
});

export const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const LocationTypo = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  fontWeight: 'bold',
});

export const EditInputs = styled(TextField)({
  '& input': {
    color: 'blue',
    textAlign: 'right',
    paddingRight: '10px',
  },
  width: '90%',
  mr: '10px',

  '& .css-66dh3a-MuiInputBase-input-MuiInput-input': {
    color: 'blue',
  },
  '& .css-66dh3a-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    color: 'red',
    textAlign: 'right',

    '-webkit-text-fill-color': '#01031C',
  },
  '& .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled': {
    '-webkit-text-fill-color': '#01031C',
  },
});