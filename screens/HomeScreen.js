import React from 'react';
import { View, ScrollView, Text } from 'react-native';

export const HomeScreen = () => {
   
    return (
            <ScrollView>
                <View style={{marginTop: 50}}>   
                    <View style={{marginLeft:20}}>
                        <Text style={{ justifyContent: 'center', alignContent:'center', fontSize:40,
                    fontWeight:'bold', marginBottom: 50}}>Bienvenido a la mejor app de peliculas en cartelera</Text>
                    </View>                    
                </View>
            </ScrollView>        
    )
}
