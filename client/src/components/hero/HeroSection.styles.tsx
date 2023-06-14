import styled from '@emotion/styled';

export const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

export const JoinButton = styled.button`
  padding: 0.7rem 1.2rem;
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  background: transparent;
  width: fit-content;
  display: block;
  position: absolute;
  bottom: 70px;
  right: 120px;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 99;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: 0.2s linear;
    background-color: #000;
    opacity: 0.5;
    z-index: -2;
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    left: 0;
  }
`;

export const DescriptionWrap = styled.div`
  width: 50%;
  min-width: 250px;
  position: absolute;
  top: 20px;
  right: 50px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  background-color: #000;
  opacity: 0.7;
  padding: 1rem;
  direction: rtl;
  /* display: none; */
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 58px;
  color: #fff;
  direction: rtl;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  direction: rtl;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 2px solid #01031c;
  flex-grow: 1;
  position: relative;
  background-image: url('https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1746.jpg?w=2000');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s linear;

  &:hover {
    width: 280%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:hover ${DescriptionWrap} {
    /* display: flex; */
    background-color: blue;
  }
`;
