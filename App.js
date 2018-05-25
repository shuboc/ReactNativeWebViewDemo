/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 0,
      scrollX: 0,
      contentHeight: 0,
      contentWidth: 0,
      webviewHeight: 0,
      webviewWidth: 0,
      velocityY: 0,
      velocityX: 0,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    console.log(e.nativeEvent)

    this.setState({
      scrollY: e.nativeEvent.contentOffset.y,
      scrollX: e.nativeEvent.contentOffset.x,
      contentHeight: e.nativeEvent.contentSize.height,
      contentWidth: e.nativeEvent.contentSize.width,
      webviewHeight: e.nativeEvent.layoutMeasurement.height,
      webviewWidth: e.nativeEvent.layoutMeasurement.width,
      velocityY: e.nativeEvent.velocity.y,
      velocityX: e.nativeEvent.velocity.x,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>scrollY: {this.state.scrollY}</Text>
        <Text style={styles.instructions}>scrollX: {this.state.scrollX}</Text>
        <Text style={styles.instructions}>contentHeight: {this.state.contentHeight}</Text>
        <Text style={styles.instructions}>contentWidth: {this.state.contentWidth}</Text>
        <Text style={styles.instructions}>webviewHeight: {this.state.webviewHeight}</Text>
        <Text style={styles.instructions}>webviewWidth: {this.state.webviewWidth}</Text>
        <Text style={styles.instructions}>velocityY: {this.state.velocityY}</Text>
        <Text style={styles.instructions}>velocityX: {this.state.velocityX}</Text>
        <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
          style={{flex: 1}}
          onScroll={this.handleScroll}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
