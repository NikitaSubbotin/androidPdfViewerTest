/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const source = { uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf' };
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Pdf
              source={source}
              onLoadComplete={(numberOfPages,filePath)=>{
                  console.log(`number of pages: ${numberOfPages}`);
              }}
              onPageChanged={(page,numberOfPages)=>{
                  console.log(`current page: ${page}`);
              }}
              onError={(error)=>{
                  console.log(error);
              }}
              style={styles.pdf}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
    },
    pdf: {
      flex:1,
      width:Dimensions.get('window').width,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});
