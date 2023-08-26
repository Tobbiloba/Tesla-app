import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity  } from 'react-native';
import menuOptions from '../assets/menuOptions';
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  MaterialIcons
} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import car from '../assets/images/car.png'

import MenuOption from '../components/MenuOption';
import Controls from '../components/Controls';
export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='#161818'/>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>


      <Image source={car} style={styles.image} resizeMode='contain'/>

     

    {/* <Controls /> */}

  <FlatList 
    data={menuOptions}
    showsVerticalScrollIndicator={false}
    renderItem={MenuOption}
    ListHeaderComponent={Controls}
    // keyExtractor={}
  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '500',
    color: 'gray',
  },
  image : {
    width: '100%',
    height: 300
  },

});