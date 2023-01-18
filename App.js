import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import Header from './components/header';

export default function App() {

  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Pepperoni', quantity: 5, price: '0.80' },
    { id: 2, name: 'Sweetcorn', quantity: 0, price: '0.42' },
    { id: 3, name: 'Chicken', quantity: 0, price: '1.15' },
    { id: 4, name: 'Pepper', quantity: 0, price: '0.68' },
    { id: 5, name: 'Mushroom', quantity: 0, price: '0.42' },
  ]);

  const [size, setSize] = useState('small');

  function handleAddBtn(id){
    console.log('add')
    // setIngredients(prev => prev[0].quantity += 1 )

    setIngredients(prev => {
      console.log(prev[id-1].name)
      console.log(prev[id-1].id, (id-1))
      if(prev[id-1].id == id) return prev[id-1].quantity += 1;
      // console.log(prev[id-1].quantity)
    })
  }

  function handleMinusBtn(){
    console.log('minus')
    // setIngredients(prev => prev -= 1)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text>Please select your toppings</Text>
      
      <FlatList
      numColumns={2}
        keyExtractor={(item) => item.id} 
        data={ingredients}
        renderItem={({ item }) => (
          <View >
            <Text>{item.name}</Text>
            <Text>£{item.price}p</Text>

            <Button title='Add' onPress={() => handleAddBtn(item.id)} />
            <Text>{item.quantity}</Text>

            <Button title='Minus' onPress={handleMinusBtn} style={styles.btnContainer} />
          </View>
        )}
      >
      </FlatList>

      <View>
        <Text>Choose your size: </Text>
        <Button title='Small' />
        <Button title='Medium' />
        <Button title='Large' />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: 'blue',
  },
});
