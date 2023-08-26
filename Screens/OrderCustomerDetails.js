import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert } from 'react-native';
import Constants from 'expo-constants';


function SignUpPage({navigation}){
  const [CustomerName, setText]=useState('');
  const [Address, setText1]=useState('');
  const [Town, setText2]=useState('');
  const [TPNumber, setText3]=useState('');
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
    <Text style={styles.xs}>{"\n"} 
     Enter Delivery Details {"\n"} 
    </Text>
    <View>
    <TextInput
     style={styles.input}
    placeholder='Customer Name'
    onChangeText={CustomerName=> setText(CustomerName)}
    defaultValue={CustomerName}
    returnKeyType="next">
    
    </TextInput>
    <TextInput
     style={styles.input}
    placeholder='Address'
    onChangeText={Address=> setText1(Address)}
    defaultValue={Address}
    returnKeyType="next">
    
    </TextInput>
    <TextInput
     style={styles.input}
    placeholder='Town'
    onChangeText={Town=> setText2(Town)}
    defaultValue={Town}
    returnKeyType="next">
    
    </TextInput>
    <TextInput
     style={styles.input}
    placeholder='TP-Number'
    onChangeText={TPNumber=> setText3(TPNumber)}
    defaultValue={TPNumber}
    returnKeyType="next">
    
    </TextInput>
    
    </View>
  </View>
  
     <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => navigation.navigate("Order Placement")}>
    <Text style={styles.buttonText}>Submit</Text>
    

 
     </TouchableOpacity>
    </ImageBackground>
</SafeAreaView> 

   
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1,
  

  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
 
  buttonContainer :{
    backgroundColor:'rgba(5, 4, 0, 0.93)',
    paddingVertical:10,
    paddingHorizontal:5,
    borderRadius: 20,
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize:18,
  },
  xs: {
    textAlign:'center',
    color:'#FFF',
    fontWeight: 'bold',
    fontSize:20,
  },
  input:{
    height : 40,
    width : 300,
    backgroundColor:'#FFFFFF',
    fontWeight: 'bold',
    color :'#000000',
    marginBottom:20,
    fontSize:15,
    paddingHorizontal:10,
    borderRadius: 20,
  },
});
export default SignUpPage;