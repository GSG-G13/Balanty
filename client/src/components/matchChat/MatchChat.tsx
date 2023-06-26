import { useEffect, useState } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Fab, Typography } from '@mui/material';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {
  AddMessageBar,
  IconBackground,
  MessageInput,
  Wrapper,
} from './MatchChat.styled';
import Message from './Message';
import { IMatchDataProps } from '../../interfaces';

const MatchChat = () => {
  const { pathname } = useLocation();
  const matchId = Number(pathname.split('/')[2]);

  const [matchData, setMatchData] = useState<IMatchDataProps>({
    status: 0,
    data: {
      match: {
        MatchMessages: [],
        createdAt: '',
        description: '',
        endDate: '',
        id: 0,
        ownerId: 0,
        seats: 0,
        stadiumId: 0,
        startDate: '',
        title: '',
        updatedAt: '',
      },
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/message/match/${matchId}`,
        );
        setMatchData(data);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Error when accessing match');
      }
    })();
  }, []);

  console.log(matchData?.data?.match.id);

  return (
    <Wrapper>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 0',
          borderBottom: '1px solid #eee',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h4" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
          Match title
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <IconBackground>
            <VideocamOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
          <IconBackground>
            <CallOutlinedIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
        </div>
      </section>
      {/* <EmojiPicker /> */}
      <Message
        message="Hi G13 aaaaaaaaaaaaaaaa"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13 aaaaaaaaaaaaaaaa"
        time={Date.now().toString()}
        sender="ahmed"
        isReceived
      />
      <Message
        message="Hi G13 fffffffffffffffff"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      />
      <Message
        message="Hi G13 tttttttttttttt"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived
      />
      <Message
        message="Hi G13 ghhhhhhhhhhhhhhhhhhh"
        time={Date.now().toString()}
        sender="ahmed"
        senderAvatar="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
        isReceived={false}
      />

      <AddMessageBar>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <IconBackground>
            <AttachFileIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
          <IconBackground>
            <InsertEmoticonIcon
              style={{
                fill: '#2CB674',
                width: '23px',
                height: '23px',
              }}
            />
          </IconBackground>
        </div>
        <MessageInput placeholder="اكتب رسالتك" />
        <IconBackground
          style={{
            width: '43px',
            height: '43px',
            background: '#2CB674',
          }}
        >
          <SendIcon
            style={{
              fill: '#fff',
              transform: 'rotate(-30deg)',
              transformOrigin: 'center',
              marginTop: '-5px',
              marginRight: '-3px',
            }}
          />
        </IconBackground>
      </AddMessageBar>
    </Wrapper>
  );
};

export default MatchChat;
