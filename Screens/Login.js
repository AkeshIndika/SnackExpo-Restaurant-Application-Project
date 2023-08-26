import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert } from 'react-native';
import Constants from 'expo-constants';


function Login({navigation}){
  const [username, setText]=useState('');
  const [password, setText1]=useState('');
  
  return(
    <SafeAreaView style={styles.container}>
     <ImageBackground
      style= {{flex:1}}
      source={require('../assets/back.jpg')
      }
      style={{
          width: 400,
          height: 785,
          padding:30,
        }}
      >
       <View style={styles.contentCenter}>
      
      <Image
        source={require('../assets/logo.png')}

        style={{
          width: 150,
          height: 150,
          margintop:1,
          marginBottom:1,
          paddingTop:1,

        }}
      />

       <Text></Text>
    <Text style={styles.xl}>
       Colombo Burgers{"\n"}  {"\n"} 
       </Text>
       <Text style={styles.xy} > 
     We Serve The Best Burgers In The Country 
    </Text>
  </View>

 <Text></Text>

    <View style={styles.paddingContainer}>
    <TextInput
     style={styles.input}
    placeholder='Enter Your E-mail / Username'
    onChangeText={username=> setText(username)}
    defaultValue={('')}
    returnKeyType="next">
    
    </TextInput>
    
   
    <TextInput 
    placeholder='Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password=> setText1      (password)}
    defaultValue={''}
    returnKeyType="go">
    </TextInput>

    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
      var uname=username;
      var pword=password;

      if(uname=="Akesh" && pword=="1234"){
        Alert.alert('Successfully login!!');
        navigation.navigate('Home');
      }
      else{
        Alert.alert("Incorrect Username or Password");
      }
    }}>
    <Text style={styles.buttonText}>Login</Text>
    

    <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
  
    </TouchableOpacity>
 
     </TouchableOpacity>
    </View>
    </ImageBackground>
</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1

  },
  paddingContainer :
  {
    
    
  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
 
  input:{
    height : 40,
    backgroundColor:'#FFFFFF',
    fontWeight: 'bold',
    color :'#000000',
    marginBottom:20,
    fontSize:15,
    paddingHorizontal:10,
    borderRadius: 20,
  },
  buttonContainer :{
    backgroundColor:'rgba(5, 4, 0, 0.93)',
    paddingVertical:15,
    borderRadius: 20,
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:20,
  },
  xl: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:30,
  },
  xy: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:20,
  }
});
export default Login;