import { View, Text, StyleSheet, SafeAreaView, Image, tintColor, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { THEME_COLOR } from '../../strings';
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
const Tab1 = () => {
    return (
        <ScrollView>
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../Images/location.png')} style={styles.location} />
                    <View>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 6 }}>Vadodara</Text>
                        <Text style={{ color: 'black', marginLeft: 6 }}>Safalya Bliss,Kalali</Text>

                    </View>
                </View>
                <View style={styles.headerRight}>
                    <Image source={require('../../Images/language.png')} style={styles.language} />
                </View>

            </View>
            <View style={styles.searchBar}>
                <TouchableOpacity  >
                <Image source={require('../../Images/search.png')} style={styles.location} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchText} onPress={()=>{<TextInput placeholder='searchitems'/>}}>
                <Text style={styles.searchText}>Search Items</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../../Images/microphone.png')} style={[styles.location,{height:25,width:25}]} />
                </TouchableOpacity>
               
            </View>
            <View style={{marginTop:20}}>
                <FlatList horizontal showsHorizontalScrollIndicator={false}
                    data={['sort',
                            'fast delivery',
                            'rating 4.0',
                            'pure veg',
                            'cuisines',
                            'more']} 
                            renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.filterItem}>
                                <View style={styles.filterItemView}>
                                    {item=='sort'? (
                                    <Image source ={require('../../Images/filter.png')} style={[styles.location,
                                        {tintColor:'#000',width:20,heigth:20,marginRight:5}]}/> ): null}
                                    <Text>{item}</Text>
                                    {item=='sort' || item =='more' ? (
                                    <Image source ={require('../../Images/down.png')} style={[styles.location,
                                        {tintColor:'#000',width:10,heigth:10,marginLeft:5,marginRight:10}]}/> ): null}  
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            <View style={styles.upperView}>
                <TouchableOpacity style={styles.card}>
                    <Image source ={require('../../Images/sale.jpg')} style={{width:'100%',height:'100%',borderRadius:10}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <Image source ={require('../../Images/salad.jpg')} style={{width:'100%',height:'100%',borderRadius:10}}/>
                </TouchableOpacity>
               

            </View>
            <View style={styles.bannerView}>
            <TouchableOpacity style={styles.cardBanner}>
                    <Image source ={require('../../Images/supersale.jpg')} style={{width:'100%',height:'100%',borderRadius:10}}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.categoryTitle}>Top Picks For You</Text>
            <View>
                <FlatList
                data={[{image:require('../../Images/dominos.jpg'),
                        title:'dominos'},
                {image:require('../../Images/kfc.png'),title:'kfc'},
                {image:require('../../Images/burgerking.png'),title:'burgerking'},
                { image:require('../../Images/pizzahut.png'),title:'pizzahut'}
                ]} 
                     horizontal 
                     renderItem={({item,index})=>{
                return(
                    <View style={styles.brandItem}>
                        <View>
                        <Image source={item.image}
                        style={{width:200,height:200}}
                        resizeMode='center'/>
                        </View>
                        <View style={styles.percentageView}>
                            <Text style={{color:'#000',fontWeight:'330'}}>40 % off</Text>
                        </View>
                        
                    </View>
                    
                )}}
                />
                
            </View>
           
                <Text style={[styles.categoryTitle,{}]}>Recommended For You</Text>
                <View style={{marginTop:15}}>
                    
                        <FlatList
                        data={[{
                            image:require('../../Images/pizza.jpg')
                        },
                        {
                            image:require('../../Images/pizza.jpg')
                        },
                        {
                            image:require('../../Images/pizza.jpg')
                        },
                        {
                            image:require('../../Images/pizza.jpg')
                        },
                        {
                            image:require('../../Images/pizza.jpg')
                        }]}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({item,index})=>{
                            return(
                                <View>
                                    <TouchableOpacity style={[styles.recommendedItem,{}]}>
                                        <Image source={item.image} style={{width:'100%',
                                        height:'65%',
                                        borderTopRightRadius:20,
                                        borderTopLeftRadius:20}}/>
                                        <View styles={styles.recommendedItemPrice}>
                                            <Text style={{alignSelf:'center'}}>Rohits Pizza</Text>
                                            <View style={{
                                                width:40,
                                                heigth:25,
                                                backgroundColor:'green',
                                                borderRadius:6,
                                                justifyContent:'center',
                                                alignItems:'center',
                                                alignSelf:'center'
                                                
                                            }}>
                                                <Text style={{color:'#fff '}}>4.9</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection:'row',
                                            alignItems:'center',
                                            paddingLeft:10
                                        }}>
                                            <Image
                                            source={require('../../Images/stopwatch.png')} style={{width:10,height:10,marginLeft:6}}/>
                                            <Text style={{marginLeft:5,fontSize:12}}>36 Min</Text>
                                            <Text style={{marginLeft:5,fontSize:12}}>5 KM</Text>
                                            
                                        </View>
                                        <View style={{flexDirection:'row',
                                            alignItems:'center',
                                            paddingLeft:10}}>
                                        <Image
                                            source={require('../../Images/rupee.png')} style={{width:15,height:15,marginLeft:25}}/>
                                            <Text style={{fontSize:12,alignSelf:'center',fontWeight:'500',color:'#000'}}>250</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}/>
                
                </View>
                <View style={{backgroundColor:'#fff',heigth:100,width:100,flexDirection:'row',marginTop:80}}>

                </View>
        
        </View>
        </ScrollView>
    )
}
export default Tab1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f2f2f2'
    },
    header: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerLeft: {
        flexDirection: 'row'
    },
    headerRight: {
        flexDirection: 'row'
    },
    location: {
        height: responsiveHeight(3.5),
        width: responsiveWidth(7),
        tintColor: THEME_COLOR,
        marginLeft: 10
    },
    language: {
        height: responsiveHeight(3.5),
        width: responsiveWidth(7),
        marginRight: 10
    },
    searchBar: {
        height: responsiveHeight(8),  // Make sure to set the desired height
        borderWidth: 0.2,
        borderColor: '#8e8e8e',
        alignSelf: 'center',
        width: responsiveWidth(90),  // Make sure to set the desired width
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-evenly'
    },
    searchText: {
        width: '80%',
        marginLeft: 20
    },
    filterItem: {
        flexDirection:'row',
        borderWidth:0.2,
        borderHeight:5,
        marginLeft:15,
        height:30
    },
    filterItemView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        paddingLeft:5,
        paddingRight:5
    },
    upperView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    card:{
        height:responsiveHeight(13),
        width:responsiveWidth(40),
        marginTop:13
    },
    bannerView:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    banner:{
        height:'100%',
        width:'100%'
    },
    cardBanner:{
        
        height:responsiveHeight(20),
        width:'90%',
        marginTop:13
    },
    categoryTitle:{
        fontWeight:'800',
        color:'#000',
        marginTop:20,
        marginLeft:22,
        fontSize:responsiveScreenFontSize(2.2)
    },
    brandItem:{
        marginLeft:10,
        height:responsiveHeight(12),
        width:responsiveWidth(16.7),
        alignItems:'center',
        justifyContent:'space-evenly',
        
        

    },
    brandImage:{
        width:'100%',
        heigth:'100%',
        transform: [
            { scaleX: 0.8 }, // Change the horizontal scale
            { scaleY: 0.4 }, // Change the vertical scale
          ],
      
    },
    percentageView:{
        width:'80%',
        height:30,
        backgroundColor:THEME_COLOR,
        borderRadius:5,
        position:'absolute',
        top:40,
        alignSelf:'center',
        marginTop:35,
        justifyContent:'center',
        alignItems:'center'
    },
    recommendedItem:{
        width:responsiveWidth(30),
        height:responsiveHeight(25),
        backgroundColor:'#fff',
        borderRadius:10,
        marginLeft:15
    },
    recommendedItemPrice:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:10,
        paddingRight:10
    }
    








})