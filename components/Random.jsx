import { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RestaurantContext } from '../App';

export default function Randon({ navigation, foodList }) {

  const { setSelectedRestaurant } = useContext(RestaurantContext);

  const chooseRandom = () => {
    const index = Math.floor(Math.random() * foodList.length)
    setSelectedRestaurant(foodList[index]);
    navigation.navigate('Details');
  }

  return (
    <TouchableOpacity onPress={chooseRandom} >
      <View style={styles.fab}>
        <Text style={styles.fabText} >🎲</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fabText: {
    fontSize: 40,
  },
  fab: {
    display: 'absolute',
    bottom: 30,
    left: 176,
    backgroundColor: '#15317E',
    padding: 5,
    height: 60,
    width: 60,
    borderRadius: '50%',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    shadowColor: 'black',
    shadowOffset: {width: 1, height:2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
})