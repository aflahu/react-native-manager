// import library for making component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    // ios
    // height: 60,
    // paddingTop: 15,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.9,
    elevation: 3,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

// make the component availabe to other parts of the app
export { Header };
