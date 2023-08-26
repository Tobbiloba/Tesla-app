import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
    FontAwesome,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5,
    Ionicons,
  } from '@expo/vector-icons';
//   import car from '../assets/images/car.png'
const Controls = () => {
  return (


    <View>
        {/* <Image source={car} style={styles.image} resizeMode='contain'/> */}
       <View style={styles.controls}>
  <Entypo name="lock" size={26} color="gray" />
  <MaterialCommunityIcons name="fan" size={26} color="gray" />
  <FontAwesome5 name="bolt" size={26} color="gray" />
  <Ionicons name="car-sport-sharp" size={26} color="gray" />
</View>
    </View>
  )
}

export default Controls

const styles = StyleSheet.create({
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 30
      },
    //   image : {
    //     width: '100%',
    //     height: 300
    //   },
})
