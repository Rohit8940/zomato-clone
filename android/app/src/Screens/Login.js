import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { LOGIN_TITLE, THEME_COLOR } from '../strings';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {  useNavigation } from '@react-navigation/native';
import MainScreen from './MainScreen';
import Modal from 'react-native-modal';
import {
    Grayscale,
    Sepia,
    Tint,
    ColorMatrix,
    concatColorMatrices,
    invert,
    contrast,
    saturate
  } from 'react-native-color-matrix-image-filters'



const Login = () => {

    const [mobile, setMobile] = useState('')
    const [confirm, setConfirm] = useState(null)
    const [otp, setOtp] = useState('')
    const [visible, setVisible] = useState(false);
    const navigation =useNavigation();
    const [languages, setLanguages] = useState([
        {name:'English',selected:true},

        {name:'हिंदी',selected:false},

        {name:'തെലുങ്ക്',selected:false},

        {name:'తెలుగు',selected:false},

        {name:'অসমীয়া',selected:false},

        {name:'नेपाली',selected:false},

        {name:'मैथिली',selected:false},

        {name:'마이탈리',selected:false}
    ])
    const signInWithPhoneNumber = async () => {
        const confirmation = await auth().signInWithPhoneNumber('+91' + mobile);
        setConfirm(confirmation);
        console.log(confirmation);

    }

    const verify = async () => {
        try {
            const res = await confirm.confirm(otp);
            console.log(res);
        } catch (error) {
            console.log('Invalid code.');
            console.warn('Invalid code')
        }

    }
    const onSelect=(index)=>{
        let templang=languages;
        templang.map((item,ind)=>{
            if(ind==index){
                if(item.selected==true){
                    item.selected=false;
                }
                else{
                    item.selected=true;
                }
            }
            else{
                item.selected=false;
            }
        })
        
        let x=[];
        templang.map(item=>{
            x.push(item)
        });
        setLanguages(x);
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'red'} />
            <View style={styles.topView}>
                <Image source={require('../Images/banner.png')} style={styles.banner} />
                <TouchableOpacity style={styles.LanguageButton} onPress={() => { setVisible(true) }}>
                    <Image source={require('../Images/languageButton.png')} style={styles.languageImage} />
                </TouchableOpacity>

            </View>

            <View>
                <Text style={styles.loginTitle}>{LOGIN_TITLE}</Text>

            </View>
            <View style={styles.divider}>

                <View style={[styles.dividerView, { marginRight: 20 }]}>




                </View>
                <Text style={styles.dividerLogin}>Login or Sign up</Text>
                <View style={[styles.dividerView, { marginLeft: 20 }]}>

                </View>
            </View>
            {
                confirm == null
                    ?
                    <View>
                        <TextInput placeholder='Enter mobile Number' style={styles.textInput}
                            keyboardType='number-pad' value={mobile} onChangeText={txt => { setMobile(txt) }} />
                        <TouchableOpacity style={styles.loginButton} onPress={() => {
                            //signInWithPhoneNumber();
                            //setVisible(true)
                            navigation.navigate('MainScreen')
                        }}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    :
                    <View>
                        <OTPInputView
                            style={{ width: '80%', height: 50, alignSelf: 'center', marginTop: 40 }}
                            pinCount={6}
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            // onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                                setOtp(code)
                            })} />

                        <TouchableOpacity style={styles.loginButtonOtp} onPress={() => { 
                            verify(); }}>
                            <Text style={styles.loginText}>Verify OTP</Text>
                        </TouchableOpacity>

                    </View>


            }
            <Modal isVisible={visible} style={styles.modalStyle} animationIn={'bounceInUp'}
                animationInTiming={1500} onBackdropPress={() => {
                    setVisible(false)
                }} >
                <View style={styles.modalContainer}>
                    <FlatList data={languages} renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity 
                            style={[styles.languageItem,{borderWidth:1.5,
                            borderColor:item.selected?THEME_COLOR:'#8e8e8e',flexDirection:'row',paddingLeft:4.5}]}
                            onPress={()=>{
                                onSelect(index)
                            }}>
                                <View style={{ width: '90%', 
                                height: '100%', flexDirection: 'row',
                                justifyContent:'space-between', paddingLeft: 10,backgroundColor:item.selected==true?'#fff7f7':'#fff'}}>
                                    <View style={{flexDirection:'row'}}>
                                    {
                                        item.selected==true?
                                        (
                                            <Image source={require('../Images/selected.png')} 
                                            style={{width:35,height:35,alignSelf:'center',tintColor:THEME_COLOR,borderRadius:20}}/>
                                        )
                                        :
                                        ( 
                                            <Image source={require('../Images/notselected.png')} style={{width:40,height:40,alignSelf:'center'}}/>
                                        )
                                    }
                                    <Text style={[styles.languageText,{color:item.selected?THEME_COLOR:'#8e8e8e'}]}>{item.name}</Text>
                                    </View>
                                    { item.selected==true?
                                     <Image source={require('../Images/language.png')} 
                                     style={{width:40,height:40,marginTop:7}}/>:
                                    <Grayscale style={{justifyContent:'center'}}>
                                        <Image source={require('../Images/language.png')} 
                                        style={{width:40,height:40,opacity:.5}}/>
                                    </Grayscale>
                                        }
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    />
                </View>
            </Modal>

        </View>
        

        

    )
}


export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        height: responsiveHeight(40)
    },
    banner: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    loginTitle: {
        fontSize: responsiveFontSize(3),
        fontWeight: '800',
        color: '#000',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: responsiveHeight(5),
        width: '75%'
    },
    divider: {
        flexDirection: 'row',
        width: '100%',
        marginTop: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    dividerView: {
        height: 1,
        backgroundColor: '#8e8e8e',
        width: '28%'
    },
    dividerLogin: {
        fontSize: responsiveFontSize(2.5),
        opacity: 5
    },
    textInput: {
        width: '90%',
        borderWidth: 1,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        borderColor: '#8e8e8e'
    },
    loginText: {
        alignItems: 'center',
        weight: 600,
        color: '#fff',
        alignContent: 'center',
        fontSize: responsiveFontSize(2),
        marginTop: 6
    },
    loginButton: {
        backgroundColor: '#ff0000',
        marginTop: 25,
        height: responsiveHeight(6),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%'

    },
    borderStyleBase: {
        width: 40,
        height: 45,

    },

    borderStyleHighLighted: {
        borderColor: "#000",

    },

    underlineStyleBase: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderBottomWidth: 1,
        color: '#000',
        borderRadius: 7,
        borderColor: '#000'

    },

    underlineStyleHighLighted: {
        borderColor: THEME_COLOR,
    },
    loginButtonOtp: {
        backgroundColor: '#ff0000',
        marginTop: 40,
        height: responsiveHeight(6),
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%'
    },
    modalContainer: {
        backgroundColor: '#fff',
        height: 300,
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    modalStyle: {
        justifyContent: 'flex-end',
        margin: 10
    },
    LanguageButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 10


    },
    languageImage: {
        width: 40,
        height: 40,
        borderRadius: 10,

    },
    languageItem: {
        width: '90%',
        alignSelf: 'center',
        height: 60,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        borderWidth: 1
    },
    languageText: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
        marginLeft:10,
        
    }
})