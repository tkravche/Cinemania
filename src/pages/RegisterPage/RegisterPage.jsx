import React from 'react';
import {
  SummaryWrapper,
  WelcomeWrapper,
} from '../WelcomePage/WelcomePage.styled';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <WelcomeWrapper>
      <SummaryWrapper>
        <RegisterForm />
      </SummaryWrapper>
    </WelcomeWrapper>
  );
};

export default RegisterPage;
