import { View, Text } from 'react-native'
import React from 'react'
import { destinationData } from '../constants'
import DestinationCard from './DestinationCard'

export default function Destinations() {
  return (
    <View className='mx-4 flex-row justify-between flex-wrap' >
      {
        destinationData.map((item,index)=>{
            return (
                <DestinationCard item={item} key={index}/>
            )
        })
      }
    </View>
  )
}