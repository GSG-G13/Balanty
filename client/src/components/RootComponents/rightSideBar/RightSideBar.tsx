import { ReactElement, useContext, useEffect, useState } from 'react';
import { Divider, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import MyMatches from './MyMatches';
import RightSideBarTitle from './RightSideBarTitle';
import WorldMatch from './WorldMatch';
import { BorderBox, SideBox } from '../../index';
import { ThemeContext } from '../../../context/ThemeContext';
import { MatchesContext } from '../../../context/MyMatchesContext';
import MatchDataCard from './MatchDataCard';
import { Match } from '../../../interfaces';

const RightSideBar = (): ReactElement => {
  const [isMatch, setIsMatch] = useState(false);
  const [match, setMatch] = useState<Match>({} as Match);
  const { isDarkMode } = useContext(ThemeContext);
  const { getMyMatches, myMatches } = useContext(MatchesContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const params = useParams();

  const getMatchData = async () => {
    const { data } = await axios(
      `/api/v1/matches/match-data/${params.matchId}`,
    );
    setMatch(data.data);
  };

  useEffect(() => {
    try {
      getMyMatches();
      if (pathname.includes('/match/')) {
        getMatchData();
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    } catch (error) {
      navigate('/home');
    }
  }, [pathname]);

  return (
    <SideBox
      sx={{
        left: 0,
        borderRight: '1px solid ',
        borderRightColor: theme => theme.palette.customColors.grayColor,
        backgroundColor: theme => theme.palette.customColors.grayColor,
        color: theme => theme.palette.primary.contrastText,
        boxShadow: '-1px 4px 6px 1px rgba(0, 0, 0, 0.15)',
      }}
    >
      <BorderBox
        sx={{
          pb: '10px',
        }}
      >
        <RightSideBarTitle title="مبارياتي" />
      </BorderBox>

      {myMatches?.length ? (
        myMatches.map(matchData => (
          <MyMatches
            key={matchData.id}
            id={matchData.id}
            title={matchData.title}
          />
        ))
      ) : (
        <>
          <Typography
            sx={{
              padding: '1rem 0 0.7rem 0',
              color: isDarkMode ? '#fff' : '#000',
            }}
          >
            لا يوجد مباريات مشارك فيها حالياً
          </Typography>
          <Divider sx={{ height: '1px', width: '100%', background: 'white' }} />
        </>
      )}

      {isMatch ? (
        match.id && <MatchDataCard key={match.id} match={match} />
      ) : (
        <>
          <BorderBox
            sx={{
              p: '5px 0',
            }}
          >
            <RightSideBarTitle title="المباريات العالمية" />
          </BorderBox>

          <WorldMatch />
          <WorldMatch />
          <WorldMatch />
        </>
      )}
    </SideBox>
  );
};

export default RightSideBar;
