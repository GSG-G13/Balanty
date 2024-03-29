import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import TeamName from './TeamName';
import { StyledTeamBox, StyledWorldMatches } from '../../index';

const WorldMatch = (): ReactElement => {
  return (
    <StyledWorldMatches
      sx={{
        mt: '15px',
        backgroundColor: theme => theme.palette.customColors.backGroundColor,
      }}
    >
      <Typography
        sx={{
          mt: '5px',
        }}
      >
        الساعة: 12:00
      </Typography>
      <StyledTeamBox
        sx={{
          mt: '10px',
        }}
      >
        <TeamName text="ريال مدريد" />
        VS
        <TeamName text="ريال مدريد" />
      </StyledTeamBox>
    </StyledWorldMatches>
  );
};

// we gona to fetch matches from this Api: https://api.football-data.org/v4/matches

export default WorldMatch;
