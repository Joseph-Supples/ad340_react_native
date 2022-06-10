/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



const demoApp = () => {

  return (

    <NavigationContainer>
    <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'React Native Assignment, pt. 2' }}
            />
            <Stack.Screen name="People"
            component={PeopleScreen}
            options = {{title: 'List of People'}}/>
            <Stack.Screen name="Profile"
            component = {ProfileScreen}
            options = {{title: 'Person Details'}}/>
          </Stack.Navigator>

    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
  <View
              style={{
                flex: 1,
              }}>


          <Text style = {styles.description}>This is a sample React Native assignment for AD 340. It has a heading and a list of pizza toppings</Text>
          <FlatList
                  data={[
                    {key: 'Pepperoni'},
                    {key: 'Mushroom'},
                    {key: 'Extra cheese'},
                    {key: 'Sausage'},
                    {key: 'Onion'},
                    {key: 'Black olives'},
                    {key: 'Green pepper'},
                    {key: 'Fresh garlic'},
                    {key: 'Tomato'},
                    {key: 'Fresh basil'}
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />

    <Button
      title="Go to People Screen"
      onPress={() =>
        navigation.navigate('People')
      }
    />
    </View>
  );
};

const PeopleScreen = ({ navigation, route }) => {
const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState([]);

     const getPeople = async () => {
          try {
           const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=10');
           const json = await response.json();
           setData(json.data);
         } catch (error) {
           console.error(error);
         } finally {
           setLoading(false);
         }
       }

        useEffect(() => {
           getPeople();
         }, []);





  return <View style={{ flex: 1, padding: 24 }}>
               {isLoading ? <ActivityIndicator/> : (
                 <FlatList
                   data={data}
                   keyExtractor={({ id }, index) => id}
                   renderItem={({ item }) => (
                     <Button
                     title = {item.firstname+' '+item.lastname}
                     onPress={() =>
                                    navigation.navigate('Profile', { item: item})
                                     }></Button>
                   )}
                 />
               )}
             </View>;
};

const ProfileScreen = ({navigation, route}) => {
    const item = route.params.item
    const imgsource = item.image
    return <View>
    <Text>Name: {item.firstname} {item.lastname}</Text>
    <Text>Username: {item.username}</Text>
    <Text>Website: {item.website}</Text>
    <Text>Image: </Text><Image source={{uri: item.image+item.id}}
                                      style={{width: 400, height: 400}}/>
    </View>
};
const styles = StyleSheet.create({
  title:{
  fontSize:24,
  fontWeight: "bold",
  textAlign: "center"}
  ,
  description: {
  fontSize: 18,
  fontWeight:"500",
  textAlign:"center",
  marginTop: "10%",
  marginBottom: "10%"},
  item:{
  }
});

export default demoApp;
