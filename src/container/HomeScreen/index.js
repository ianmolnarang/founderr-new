import React, { useEffect } from 'react';
import { View, Text , StyleSheet, Image, TouchableOpacity } from 'react-native';


const HomeScreen = ({}) => {


  const navigateToMain = () => {
    NavigationContainer.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Hooray!</Text>
      <Text style={styles.subHeading}>{`Your founderr account is live and kicking`}</Text>
      <Image
      style={styles.image}
      source={require('../../assests/Illustrations/hurray.png')}/>
      <TouchableOpacity style={styles.button} onPress={navigateToMain} >
        <Text style={styles.content}>You are good to go</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
  flex:1,
  },
  mainHeading:{
  marginTop:120 ,
  alignSelf:'center',
  fontSize:40,
  fontWeight: "bold",
  color:'black'
  },
  subHeading: {
    marginTop:16 ,
    alignSelf:'center',
    fontSize:20,
    color:'#0892D0',
    fontWeight: "bold",
  },
  image:{
   height:550,
   width:400,
   marginTop:-50
  },
  button:{
  backgroundColor:'#0892D0',
  padding:14,
  width:'50%',
  height:50,
  alignSelf:'center',
  marginTop:-60,
  borderRadius:5 ,
  },
  content:{
  color:'white',
  alignSelf:'center',
  fontWeight: "bold",
  fontSize:16
  },

})

export default HomeScreen;