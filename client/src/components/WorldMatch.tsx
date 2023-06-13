import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import TeamName from './TeamName';

const WorldMatch = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '90%',
        height: '80px',
        backgroundColor: '#D9D9D9',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '15px',
      }}
    >
      <Typography
        sx={{
          mt: '5px',
        }}
      >
        الساعة: 12:00
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          p: '10px',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        <TeamName text="ريال مدريد" />
        VS
        <TeamName text="ريال مدريد" />
      </Box>
    </Box>
  );
};

// we gona to fetch matches from this Api: https://api.football-data.org/v4/matches

export default WorldMatch;
