import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    // console.log(route)

    // const {id,name}=route.params
  return (
    <View>
          <Text>Profile </Text>
                    <Text>id </Text>

          <Button title="Go to Home" onPress={()=>navigation.navigate("Home")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})