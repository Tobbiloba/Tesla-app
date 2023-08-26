import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const controlsScreen = () => {
  return (
    <View>
      <Text>Screen</Text>
      <MaterialCommunityIcons name="trumpet" size={24} color="black" />
      {/* <MaterialCommunityIcons name="car-light-high" size={24} color="black" /> */}
      {/* <MaterialCommunityIcons name="car-light-dimmed" size={24} color="black" /> */}
      {/* <MaterialCommunityIcons name="car-light-fog" size={24} color="black" /> */}
      {/* <MaterialCommunityIcons name="car-electric" size={24} color="black" /> */}
      {/* <MaterialCommunityIcons name="car-door" size={24} color="black" /> */}
      {/* <MaterialCommunityIcons name="car-key" size={24} color="black" /> */}
    </View>
  )
}

export default controlsScreen

const styles = StyleSheet.create({})