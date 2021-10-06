import React from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export const CardMovie = ({movie, height=330, width=240}) => {

    const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    return (
        <TouchableOpacity
            style={{
                width,
                height,
                marginHorizontal:2,
                paddingBottom:20,
                paddingHorizontal:7
            }}
            activeOpacity={0.8}
        >            
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.image}
                />
            </View>           

        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18        
    },
    imageContainer:{
        flex: 1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,            
    }        
})