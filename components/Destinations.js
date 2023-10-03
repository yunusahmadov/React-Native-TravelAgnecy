import { View, Text } from 'react-native'
import React from 'react'
import { destinationData } from '../constants'
import DestinationCard from './DestinationCard'
import { useNavigation } from '@react-navigation/native'

export default function Destinations() {
  const navigation=useNavigation();
  return (
    <View className='mx-4 flex-row justify-between flex-wrap' >
      {
        destinationData.map((item,index)=>{
            return (
                <DestinationCard navigation={navigation} item={item} key={index}/>
            )
        })
      }
    </View>
  )
}