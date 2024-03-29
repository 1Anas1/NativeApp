import { View, Text ,ScrollView ,SafeAreaView,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import PicherIm from '../../components/PickerIm/PicherIm'
import User from '../../../assets/images/User.png'
import Vector from '../../../assets/images/Vector.png'
import not from '../../../assets/images/Notification.png'
import logout from '../../../assets/images/Logout.png'
import lang from  '../../../assets/images/Languagel.png'
import eye from '../../../assets/images/Eye.png'
import Toggle from '../../../assets/images/Toggle.png'
import Protect from '../../../assets/images/Protect.png'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { socket } from "../../api/ApiManager";
import  ImagePickerAvatar  from "../../components/uplode_Image/ImagePickerAvatar";
import avataranas from '../../../assets/images/AvatarAnas.png'
import { API_BASE_URL } from '@env';

const Settings = ({onLogoutSuccess,onLoad,userInfo}) => {
  const navigation = useNavigation();
  const [UserName, setUserName] = useState(null);
  const [uri, setimageuri] = useState('');

  useEffect(() => {
    if(userInfo.image){
      console.log(API_BASE_URL+"/uploads/"+userInfo.image);
      setimageuri(API_BASE_URL+"/uploads/"+userInfo.image);
    }
    
    
  }, []);

  
  const adduriImage = (uri) =>{
    
    setimageuri(uri)
  
   }
  AsyncStorage.getItem('user')
  
  .then(userString => {
    // Check if user exists in storage
    if (userString) {
      // User found, parse user string to JavaScript object
      const user = JSON.parse(userString);
      setUserName(userInfo.lastName+" "+userInfo.firstName);
      console.log(UserName);
      // Do something with the user object
    } else {
      // User not found in storage
      console.log('User not found in storage.');
    }
  })
  .catch(error => {
    console.error(error);
  });
  const handleLogout = async ()=>{
    
    
    onLogoutSuccess();
    await new Promise(resolve => setTimeout(resolve, 2000));
    onLoad(false);
    

    // Navigate to Signin screen
    
    
  }
  const onSecurityPressed = () => {
    navigation.navigate("Security",{ id: userInfo._id });
     }
     const onArrowPressed = () => {
      navigation.navigate("Edit Profil", { member: userInfo });
    };
  return (
    <SafeAreaView style={{ width:'100%',justifyContent: "flex-start", alignItems: "center",flex:1,backgroundColor:'#FFFFFF',}} >
     <View style={{alignItems:"center",justifyContent:"center",width:"100%",flex:1}}> 
     <Image
         style={Styles.avatarImage}
         source={uri ? {uri:uri}: avataranas}
         />
    <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:19,color:'#000000',fontWeight:'700',paddingTop:10}}>{UserName}</Text></View>
    
    
    </View>
    
    <ScrollView style={{width:'100%',paddingLeft:20,paddingRight:30,height:180}}>
    
      <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={onArrowPressed}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={User} style={{marginLeft:-4}}  /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>Edit Profile </Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector} />
         
         </View>
         </TouchableOpacity>
        
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={lang}   /> 
            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingLeft:4}}>Language</Text>
            <Text style={{marginLeft:100,fontWeight:'500'}}>English (US)</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={onSecurityPressed}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={Protect}   /> 

            <Text style={{color:'black',fontSize:16,fontWeight:'600',paddingLeft:3}}>Security</Text>
           
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>
        
         
         <TouchableOpacity style={{flex:1,flexDirection:'row',height:50}} onPress={handleLogout}>
        <View style={{flex:5,flexDirection:'row',alignItems:'center'}}>
            <Image source={logout}   /> 
            <Text style={{color:'#E20522',fontSize:16,fontWeight:'600',paddingLeft:2}}>Logout</Text>
        </View>
         
         <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
        
         <Image source={Vector}/>
         
         </View>
         </TouchableOpacity>

         
        
    
    
    
    
    
    </ScrollView>
    




    </SafeAreaView>
      
    
  )
}
const Styles= StyleSheet.create({

  
avatarImage:{

width:120,
height:120,
borderRadius:120/2,
},




});

export default Settings