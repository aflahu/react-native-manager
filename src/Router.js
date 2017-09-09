import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';

const RouterComponent = () => {
  return (
    <Router style={{ paddingTop: 55 }}>
      <Scene key="login" component={LoginForm} title="Please Login" />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  );
};

export default RouterComponent;
