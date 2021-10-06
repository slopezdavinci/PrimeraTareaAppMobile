import React from 'react'
import { ActivityIndicator,Dimensions, View, ScrollView, Text } from 'react-native';
import { CardMovie } from '../components/cardMovie';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';



const {width: windowWidth}=Dimensions.get('window');

export const HomeScreen = () => {

    const {nowPlaying, isLoading}= useMovies();
    
    if(isLoading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }


    return (
            <ScrollView>
                <View style={{marginTop: 50}}>   
                    <View style={{marginLeft:20}}>
                        <Text style={{ justifyContent: 'center', alignContent:'center', fontSize:40,
                    fontWeight:'bold', marginBottom: 50}}>Peliculas en cartelera</Text>
                    </View>
                    <View
                        style={{
                            height:380
                        }}
                    >
                        <Carousel
                            data={nowPlaying}
                            renderItem={({item})=> <CardMovie movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={240}
                            inactiveSlideOpacity={0.9}
                        />
                    </View>
                    
                </View>
            </ScrollView>        
    )
}
