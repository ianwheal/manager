import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate(); }}
            leftTitle="Log Out"
            onLeft={() => { firebase.auth().signOut(); Actions.auth(); }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
