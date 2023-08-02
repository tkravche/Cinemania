import React from 'react';
import {
  SummaryWrapper,
  WelcomeTitle,
  WelcomeText,
  ButtonsBlock,
  WelcomeWrapper,
  StyledNavLink,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomeWrapper>
      <SummaryWrapper>
        <WelcomeTitle>Let’s Make Your Own Cinema</WelcomeTitle>
        <WelcomeText>
          It is a guide to creating a personalized movie theater experience.
          You'll need a projector, screen, and speakers. Decorate your space,
          choose your films, and stock up on snacks for the full experience.
        </WelcomeText>
        <ButtonsBlock>
          <StyledNavLink to="/register">Registration</StyledNavLink>
          <StyledNavLink to="/signin">Sign in</StyledNavLink>
        </ButtonsBlock>
      </SummaryWrapper>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
