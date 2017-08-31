import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Stack>
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          titleStyle={style.titleStyle}
        />
      </Stack>
    </Router>
  );
};

const style = {
  titleStyle: {
    alignSelf: 'center',
  },
};

export default RouterComponent;
