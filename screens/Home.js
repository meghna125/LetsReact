import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image
 } from 'react-native';



/*
  @dev - Sheetal Kumar
  Date - 23 Jan 2019
*/

 class Explore extends Component {
  render() {
    return (
     <SafeAreaView style={{flex:1}}>
      <View style={{height:80,backgroundColor:'white',
    borderBottomWidth:1,borderBottomColor:'#dddddd'}}>
  </View>
   <ScrollView
   scrollEventThrottle={16}>
   <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
     <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
       Hello Sheetal, What do want to buy?
     </Text>
     <View style={{height: 130, marginTop: 20,}}>
     <ScrollView>
       <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
        <View style={{flex: 2}}>
          <Image source={require('../assets/raw.jpg')}
          style={{flex: 1, width: null, height: null, resizeMode:'cover'}} />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
        <Text>
          First Item 
        </Text>
        </View>
       </View>
       </ScrollView>
     </View>
   </View>

   </ScrollView>
     
     </SafeAreaView>
    );
  }
}

export default Explore;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});