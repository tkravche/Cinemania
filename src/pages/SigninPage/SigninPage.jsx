import React from 'react';
import {
  SummaryWrapper,
  WelcomeWrapper,
} from '../WelcomePage/WelcomePage.styled';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const SigninPage = () => {
  return (
    <WelcomeWrapper>
      <SummaryWrapper>
        <RegisterForm />
      </SummaryWrapper>
    </WelcomeWrapper>
  );
};

export default SigninPage;
