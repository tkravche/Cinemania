import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import peopleMob from '../../assets/images/peopleMob.jpg';
import peopleMobR from '../../assets/images/peopleMob@2.jpg';

import peopleTab from '../../assets/images/peopleTab.jpg';
import peopleTabR from '../../assets/images/peopleTab@2.jpg';

import peopleDesk from '../../assets/images/peopleDesk.jpg';
import peopleDeskR from '../../assets/images/peopleDesk@2.jpg';
import { devices } from '../../constants';

export const WelcomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
    url(${peopleMob});
   background-repeat: no-repeat;
  padding-left: 20px;
  background-size: cover;
    background-position: 3cm;
  @media ${devices.retina} {
    background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
      url(${peopleMobR});
  }
  @media ${devices.tablet} {
    background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
      url(${peopleTab});
    background-size: 135%;
    background-position: 2cm;
    padding-left: 44px;
    @media ${devices.retina} {
      background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
        url(${peopleTabR});
    }
  }
  @media ${devices.desktop} {
    background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
      url(${peopleDesk});
    background-position: 12cm;
    background-size: 90%;
    padding-left: 80px;
    @media ${devices.retina} {
      background-image: linear-gradient(90deg, #111, rgba(17, 17, 17, 0.15) 45%),
        url(${peopleDeskR});
    }
  }
`;

export const SummaryWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media ${devices.tablet} {
    width: 315px;
   }
  @media ${devices.desktop} {
    width: 488px;
    }
`;
export const WelcomeTitle = styled.h1`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 96%;
  margin-bottom: 8px;
  @media ${devices.tablet} {
    font-size: 40px;
    margin-bottom: 16px;
  }
  @media ${devices.desktop} {
    font-size: 55px;
    margin-bottom: 26px;
  }
`;
export const WelcomeText = styled.p`
  color: #f8f8f8;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  @media ${devices.tablet} {
    margin-bottom: 32px;
  }
  @media ${devices.desktop} {
    font-size: 16px;
  }
`;
export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: center;
  align-items: center;
  gap: 14px;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 12px 24px;
  border-radius: 74px;
  border: 2px solid #f87719;
  background: linear-gradient(145deg, #ffc226 0%, #f84119 100%);
  color: #111111;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: background 0.5s ease-in-out, border 0.5s ease-in-out,
    color 0.5s ease-in-out;
  &:hover,
  &:focus {
    border: 2px solid transparent;
    background: linear-gradient(to right, #f8f8f8, white),
      linear-gradient(145deg, #ffc226 0%, #f84119 100%);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    color: #f87719;
  }
  @media ${devices.tablet} {
    font-size: 14px;
    line-height: calc(20 / 14);
  }
  @media ${devices.desktop} {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;
