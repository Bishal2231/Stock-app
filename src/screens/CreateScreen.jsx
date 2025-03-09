import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AllItems from './AllItems'
import { Alert } from 'react-native'
const CreateScreen = ({ data, setData }) => {
  const [itemName, setItemName] = useState('')
  const [stock, setStock] = useState('')

  const handleAdd = () => {
    console.log("HELLO WORLD");
    console.log("data item before handle add function ", data);
    console.log("---------------------------");

    if(itemName === "" || stock === ""){
      Alert.alert("Please enter both the fields")
      return;
    }
    const newItem = {
      id: data.length + 1, // generating id based on the current length of the array
      name: itemName,
      stock: parseInt(stock), // make sure stock is a number, if it should be
    };

    const updatedData = [...data, newItem]; // create a new array with the new item
    setData(updatedData);

    console.log("data after adding function ", updatedData); // log the updated data

    // Clear input fields
    setItemName("");
    setStock("");
    Alert.alert("Item Added Successfully")
  };

  useEffect(() => {

  }, [data])
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Create</Text>
      <TextInput placeholder="enter an Item Name.."
        value={itemName}
        style={styles.input}
        onChangeText={(item) => setItemName(item)} />

      <TextInput placeholder="enter an Stock.."
        value={stock}
        style={styles.input}
        onChangeText={(item) => setStock(item)} />

      <Pressable onPress={handleAdd}> <Text style={styles.submitbtn}>Submit </Text> </Pressable>

      <AllItems data={data} setData={setData} />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "Black",
    padding: 8,
    borderRadius: 5
  }, submitbtn: {
    padding: 10,
    border: "1px solid grey",
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5
  }, container: {
    gap: 20,
    textAlign: "center"
  }, containerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    margin:10
  }
})