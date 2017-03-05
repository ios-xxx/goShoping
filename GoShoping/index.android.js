/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LanuchImage from 'Class/androidLanuch/CSYLanuch';

export default class GoShoping extends Component {
  render() {
    return (
      <LanuchImage/>
    );
  }
}

AppRegistry.registerComponent('GoShoping', () => GoShoping);
