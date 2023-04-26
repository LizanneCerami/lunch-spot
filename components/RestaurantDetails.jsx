import { useContext } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { RestaurantContext } from '../App';


export default function RestaurantDetails() {

  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    <View style={styles.main} >
      <Image style={styles.img} source={{ uri: selectedRestaurant.image}} />
      <Text style={styles.title}>{ selectedRestaurant.name }</Text>
      <View style={styles.meta}>
        <Text>Cuisine: {selectedRestaurant.cuisine}</Text>
        <Text>Rating: {selectedRestaurant.rating.toFixed(1)} ⭐️ </Text>
      </View>
      <Text style={styles.addr}>{ selectedRestaurant.address }</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  meta: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  addr: {
    fontSize: 16,
  },
  img: {
    width: 420,
    height: 280,
    borderRadius: 6,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    marginVertical: 16,
  },
  main: {
    flex: 1,
    backgroundColor: 'tan',
    width: '100%',
    alignItems: 'center',
    padding: 16,
  },
})