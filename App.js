/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';





const demoApp = () => {

  return (

      <View
            style={{
              flex: 1,
            }}>
            <Text
                style= {styles.title}
              >React Native Assignment</Text>

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
      </View>


  );
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
