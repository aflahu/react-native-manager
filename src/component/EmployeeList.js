import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createdDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // mengecek apakah masih sama atau tidak untuk menetukan render
    this.createdDataSource(nextProps);
  }

  createdDataSource({ employees }) {
    const ds = new listView.Datasource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.datasource = ds.cloneWithRows(employees);
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}
export default connect(null, { employeesFetch })(EmployeeList);
