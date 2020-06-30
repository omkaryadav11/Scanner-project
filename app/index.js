import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";
import Animated from 'react-native-reanimated'
import {TapGestureHandler, State} from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

 class MyApp extends Component{
     render() {
         return(
            <View style={{flexDirection:1, backgroundColor: '#fff', justifyContent:'flex-end'}}>
                <View style={{...StyleSheet.absoluteFill}}>
                
                <Image source={require('../assets/scanner.jpg')}
                    style={{flex:1, height: null, width: null}}
                />

                </View>
                <View style={{height: height/3 , justifyContent:'center'}}>
                <TapGestureHandler>
                <View style={styles.button}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>  SIGN IN</Text>
                </View>
                </TapGestureHandler>
                <View style={{...styles.button, backgroundColor:'#e7ed68'}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', color:'#fff'}}>  SIGN IN WITH GOOGLE</Text>
                </View>
                </View>
            </View>
         );
     }
 }

  export default MyApp;

  const styles =StyleSheet.create({
      container:{
          flex: 1,
           alignItems:"center",
           justifyContent:"center"
      },
      button: {
          backgroundColor:'#fff',
          height: 70,
          marginHorizontal: 20,
          borderRadius: 35,
          alignItems: 'center',
          justifyContent:'center',
          marginVertical: 5
      }
  });