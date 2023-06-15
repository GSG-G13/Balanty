import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';

export const HeroSectionWrapper = styled(Box)`
  display: flex;
  height: 80vh;
  width: 100vw;
`;

// export const JoinButton = styled(Button)`

//   /* padding: 0.7rem 1.2rem; */
//   /* border: 2px solid #fff; */
//   /* color: #fff; */
//   /* font-size: 1.1rem; */
//   /* font-weight: bold; */
//   /* font-family: Arial, Helvetica, sans-serif; */
//   /* background: transparent; */
//   /* width: fit-content; */
//   /* display: block; */
//   /* position: absolute;
//   bottom: 70px;
//   right: 120px;
//   transform: translateX(-50%); */
//   overflow: hidden;
//   z-index: 99;
//   cursor: pointer;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     transition: 0.2s linear;
//     background-color: #000;
//     opacity: 0.5;
//     z-index: -2;
//   }
//   &:hover {
//     color: #fff;
//   }
//   &:hover::before {
//     left: 0;
//   }
// `;

export const DescriptionWrap = styled(Box)`
  width: 50%;
  min-width: 250px;
  position: absolute;
  top: 20px;
  right: 50px;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  background-color: #000;
  opacity: 0.7;
  padding: 1rem;
  direction: rtl;
  display: none;
`;

export const Title = styled(Typography)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 58px;
  color: #fff;
  direction: rtl;
`;

export const Description = styled(Typography)`
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  direction: rtl;
`;

interface Props {
  imageUrl: string;
}
export const Wrapper = styled(Typography)<Props>({
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  border: '2px solid #01031c',
  flexGrow: '1',
  position: 'relative',
  backgroundImage:
    'url(https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1167.jpg?w=1060&t=st=1686716098~exp=1686716698~hmac=30d4ec020d1fca140a964c191c7b8f3f7a3491b204a2bcceea9194ae8b93f9bb)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: 'all 0.3s linear',

  '&: hover': {
    width: '280%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '.description-wrap': {
      display: 'flex',
    },
  },
});
