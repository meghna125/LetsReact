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
        
            <View style={{height:80,backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}> 
            </View>
        
              <ScrollView scrollEventThrotte= {16}>
                  
                  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                    <Text style={{fontSize: 24, fontWeight:'700', paddingHorizontal: 20}}>
                          Hello Sheetal, What do want to buy?
                      </Text>
                  <View style={{height: 130, marginTop: 20,}}>
                 
                 <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
                     
                      <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                  <View style={{flex: 2}}>
                                     <Image source={require('../assets/men_shopping.jpg')} style={{flex: 1, width: null, height: null, resizeMode:'repeat'}} />
                                  </View>
          
                                   <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
                                      <Text>Men  </Text>
                                  </View>
                            </View>

                              <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                   <View style={{flex: 2}}>
                                      <Image source={require('../assets/girl_shopping.jpg')} style={{flex: 1, width: null, height: null, resizeMode:'repeat'}} />
                                    </View>
          
                                   <View style={{ alignItems: 'center', justifyContent: 'center',flex: 1}}>
                                      <Text>Women </Text>
                                  </View>
                              </View>

                              <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
                                    <View style={{flex: 2}}>
                                      <Image source={require('../assets/kids_shopping.jpg')} style={{flex: 1, width: null, height: null, resizeMode:'repeat'}} />
                                    </View>
                                
                                    <View style={{ alignItems: 'center', justifyContent: 'center',flex: 1}}>
                                      <Text>Kids</Text>
                                    </View>
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