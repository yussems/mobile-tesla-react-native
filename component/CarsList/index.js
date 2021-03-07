import React from 'react'
import {  FlatList, Text, View } from 'react-native'
import CarItem from '../carItem/index'
import styles from './style' 
import cars from './cars'
const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
             data={cars}
             keyExtractor={(_,item) => item.id }
             
             renderItem={({item}) => {
                  
                return(
                    <CarItem key={item.id} car={item} />
                )
             }}
            />
            
        </View>
    )
}

export default CarsList

