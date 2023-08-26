import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert } from 'react-native';
import Constants from 'expo-constants';


function SignUpPage({navigation}){
  const [username, setText]=useState('');
  const [password, setText1]=useState('');
  const [password2,  setText2]=useState('');
  return(
    
    <SafeAreaView style={styles.container}>
     <ImageBackground
      style= {{flex:1}}
      source={require('../assets/back.jpg')
      }
      style={{
          width: 400,
          height: 785,
          padding:40,
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
          paddingTop:10,

        }}
      />
<Text></Text>
<Text></Text><Text></Text><Text></Text>
    <Text style={styles.xd}>
       Create Account To Log-In 
    </Text>
    <Text></Text>
    <View>
    <TextInput
     style={styles.input}
    placeholder='Enter Your E-mail / Username'
    onChangeText={username=> setText(username)}
    defaultValue={username}
    returnKeyType="next">
    
    </TextInput>
    
   
    <TextInput 
    placeholder='Enter Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password=> setText1      (password)}
    defaultValue={password}
    returnKeyType="go">
    </TextInput>

    <TextInput 
    placeholder='Re-Enter Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password2=> setText2      (password)}> 
    </TextInput>

    </View>
  </View>
  <Text></Text>
     <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => navigation.navigate("Login") }
    >
    <Text style={styles.buttonText}>Create an Account</Text>
    

 
     </TouchableOpacity>
    </ImageBackground>
</SafeAreaView> 

   
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1

  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
 
  buttonContainer :{
    backgroundColor:'rgba(5, 4, 0, 0.93)',
    paddingVertical:15,
    paddingHorizontal:5,
    borderRadius: 20,
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:20,
  },
  xd: {
    textAlign:'center',
    color:'#FFF',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom:20,
  },
  input:{
    height : 40,
    width : 290,
    backgroundColor:'#FFFFFF',
    fontWeight: 'bold',
    color :'#000000',
    marginBottom:20,
    fontSize:15,
    borderRadius: 20,
    paddingHorizontal:10,
    
  },
});
export default SignUpPage;