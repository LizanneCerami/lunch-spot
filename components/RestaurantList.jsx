
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import RestaurantCard from './RestaurantCard.jsx'

export default function RestaurantList() {

  const [foodList, setFoodList] = useState()

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then(resp => resp.json())
      .then(setFoodList)
      .catch(alert)
  }, [])

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Restaurant List </Text>
      <ScrollView style={styles.list}>
        {foodList && foodList.map(food => (
          <RestaurantCard food={food} key={food.id}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    marginVertical: 8,
    color: '#151B54',
  },

  list: {
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
  },

  container: {
    flex: 1,
    // backgroundColor: 'pink',
    marginTop: 32,
    width: '90%',
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})