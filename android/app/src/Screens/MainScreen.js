import { View,Text, StyleSheet,Image } from 'react-native';
import React, { useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { THEME_COLOR } from '../strings';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';


const MainScreen=()=>{
    const [selected,getSelected]=useState(0)
    return(
        
        <View style={styles.container}>
            {selected==0?<Tab1/>:selected==1?(<Tab2/>):<Tab3/>}
            <View style={styles.bottomNavigationView}>
            

            
                <TouchableOpacity style={styles.tab} onPress={()=>{getSelected(0)}}>
                    
                    <View style={{borderTopWidth:1,width:90,borderTopColor:selected==0?THEME_COLOR:'#fff'}}></View>
                    <Image source={require('../Images/delivery.png')} style={[styles.tabIcon,{tintColor:selected==0?THEME_COLOR:'#8e8e8e'}]}/>
                        <Text style={{alignSelf:'center',fontWeight:'700',color:'#000'}}>Delivery</Text>
                     </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={()=>{getSelected(1)}}>
                <View style={{borderTopWidth:1,width:90,borderTopColor:selected==1?THEME_COLOR:'#fff'}}></View>
                    <Image source={require('../Images/dining.png')} style={[styles.tabIcon,{alignSelf:'center',tintColor:selected==1?THEME_COLOR:'#8e8e8e'}]}/>
                    <Text style={{alignSelf:'center',fontWeight:'700',color:'#000'}}>Dining</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={[styles.tab,{}]} onPress={()=>{getSelected(2)}}>
                <View style={{borderTopWidth:1,width:90,borderTopColor:selected==2?THEME_COLOR:'#fff'}}></View>
                    <Image source={require('../Images/wheel.png')} style={[styles.tabIcon,{tintColor:selected==2?THEME_COLOR:'#8e8e8e'}]}/>
                    <Text style={{alignSelf:'center',fontWeight:'700',color:'#000'}}>Zomaland</Text>
                
                </TouchableOpacity>
                
                
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    bottomNavigationView:{
        
        height:responsiveHeight(6),
        width:responsiveWidth(100),
        backgroundColor:'#fff',
        position:'absolute',
        bottom:0,
        justifyContent:'space-evenly',
        flexDirection:'row',
            
        
    },
    tab:{
        
        width:'100%',
        height:'100%',
        justifyContent:'space-evenly'
    },
    tabIcon:{
        height:30,
        width:30,
        alignSelf:'center'
    },
    iconText:{
       
    }
})
export default MainScreen;