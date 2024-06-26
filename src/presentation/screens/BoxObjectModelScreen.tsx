import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
        {/* <View style = {styles.purpleBox}></View> */}
        <View style = {styles.purpleBox}>
          <Text style = {{color: 'white'}}>Hola Mundo!</Text>
        </View>
    </View>
  )
}

//Margin separa al elemento del padre, pero el padding hace una separación interna del elemento
//Margin: Espacio externo
//Padding: Espacio interno
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',        
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10,
    },
    purpleBox: {
      height:30,
      backgroundColor: 'purple',
      // margin: 20,
      marginHorizontal: 20,
      marginVertical: 50,
      padding: 5,
    }
})