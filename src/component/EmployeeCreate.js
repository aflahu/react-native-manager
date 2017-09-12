import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="0823842123"
            value={this.props.phone}
            onChangeText={valeu => this.props.employeeUpdate({ prop: 'phone', value: valeu })}
          />
        </CardSection>
        <CardSection>
          <Text style={Styles.pickerStyle}>Shift</Text>
          <View style={{ flex: 2 }}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item  label="Monday" value="Monday" />
              <Picker.Item  label="Tuesday" value="Tuesday" />
              <Picker.Item  label="Wednesdey" value="Wednesdey" />
              <Picker.Item  label="Thursday" value="Thursday" />
              <Picker.Item  label="Friday" value="Friday" />
              <Picker.Item  label="Saturday" value="Saturday" />
              <Picker.Item  label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const Styles = {
  pickerStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
