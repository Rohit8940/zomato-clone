import React, { useEffect } from 'react';
import {View,Text,StyleSheet,Image, StatusBar} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {THEME_COLOR} from '../strings'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
const Splash=()=>{
    const navigation =useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },3000);
    },[])
  return(
    
    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content"/>
      <Image source={require('../Images/logo.png')} style={styles.logo}
      />
      

    </View>
    
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:THEME_COLOR,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    width:responsiveWidth(40),
    height:responsiveHeight(40)
  }
})

export default Splash;
