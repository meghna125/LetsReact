import React, { Component } from 'react';
import { AppRegistry, View ,Text} from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text style={{fontSize: 23, color: 'black',fontStyle:"normal"
        ,padding: 26, marginTop:23
         }}>Hi, I am Sheetal</Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
        <Text style={{fontSize: 23, color: 'black',padding: 26,
         alignContent :'center'}}>I am android app developer</Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
