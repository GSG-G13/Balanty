import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StadiumCardBox = styled(Box)({
  width: 'calc(100% - 560px)',
  height: '250px',
  display: 'flex',
  borderRadius: '4px',
  alignItems: 'center',
  padding: '10px',
});

export const CardContainer = styled(Box)({
  width: '50%',
  height: '95%',
  padding: '0px 40px 10px 10px',
  textAlign: 'right',
});

export const DetailsBox = styled(Box)({
  width: '100%',
  mb: '15px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
});

export const FlexBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '15px',
});

export const ButtonBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ImageBox = styled(Box)({
  width: '50%',
  height: '100%',
  borderRadius: '5px',
  backgroundSize: 'cover',
});

export const StadiumPageBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '20px',
});

export const DotsLoaderBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '20px',
});
