import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        style={{ paddingTop: 50 }}
        key="login"
        component={LoginForm}
        title="Please Login"
      />
    </Router>
  );
};

export default RouterComponent;
