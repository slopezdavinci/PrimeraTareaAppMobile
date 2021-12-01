import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';

const _GOOGLE_URL="https:/www.googleapis.com/oauth2/v3/userinfo?access_token="

export const HomeScreen = () => {

    const { userInfo,setUserInfo, auth } = useContext(AuthContext);

    let token= auth;

    useEffect(() => {        
        getUserInfo(token);
    }, [])


    const getUserInfo=(token)=>{
        axios.get(_GOOGLE_URL+token.accessToken).then(resp=>{
            setUserInfo(resp.data)            
        }).catch(error=>{
            console.log(error.message)
        })
    }
   
    return (
            <ScrollView>
                <View style={{marginTop: 50}}>   
                    <View style={{marginLeft:20}}>
                        <Text style={{ justifyContent: 'center', alignContent:'center', fontSize:40,
                    fontWeight:'bold', marginBottom: 50}}>{`Bienvenido ${userInfo.given_name}, esta es la mejor app de peliculas en cartelera`}</Text>
                    </View>                    
                </View>
            </ScrollView>        
    )
}
