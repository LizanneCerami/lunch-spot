import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';

const Stack = createNativeStackNavigator()

export const RestaurantContext = createContext()

export default function App() {

const [selectedRestaurant, setSelectedRestaurant] = useState()

  return (
    <NavigationContainer>
      <RestaurantContext.Provider value={{ selectedRestaurant, setSelectedRestaurant}}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            options={{ title: "Restaurant List" }} 
            component={RestaurantList} 
          />

          <Stack.Screen
            name="Details" 
            component={RestaurantDetails} 
          />
        </Stack.Navigator>
      </RestaurantContext.Provider>
    </NavigationContainer>
  );
}
