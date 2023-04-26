import { useContext } from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native'
import { RestaurantContext } from '../App'


export default function RestaurantCard({ food, navigation }) {

  const { setSelectedRestaurant } = useContext(RestaurantContext)

  const chooseRestaurant = () => {
    setSelectedRestaurant(food)
    navigation.navigate("Details")
  }

  return (
    <TouchableOpacity onPress={chooseRestaurant}>
      <View style={styles.card}>
        <Text style={styles.name}>{food.name}</Text>
        <Image style={styles.img} source={{ uri: food.image }} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  img: {
    width: 340,
    height: 200,
    borderRadius: 6,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 8,
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    borderColor: '#646D7E',
    borderWidth: 2,
  }
})