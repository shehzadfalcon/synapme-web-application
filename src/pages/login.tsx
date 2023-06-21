import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import FormLayout from '@/components/layouts/FormLayout';
import LoginForm from '@/components/elements/frontpage/LoginForm';

const login: React.FC = () => {
  return (
    <FormLayout>
      <LoginForm />
    </FormLayout>
  );
};

export default login;
