import {React, useState} from 'react';
import { 
  Alert,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import ValueInput from '../valueInput/valueInput';
import CustButton from '../CustomButton/CustomButton';
import { useNavigation ,useRoute } from "@react-navigation/native";
import {Controller, useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgetPassword = () => {
  const navi =useNavigation();
  const {
    control,
    handleSubmit,
    formState:{errors}} = useForm();

    console.log(errors);


  const onSend = async data=>{
    try{
        await Auth.forgotPassword(data.email);
        Alert.alert("Successful","Code Sended Successfully");
      navi.navigate('NewPassword');
    }catch(e){
      Alert.alert("Oops",e.message);
    }
  };
  const onsigninclicking = () => {
    navi.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <View style={styles.forgetpassword_top}>
        <View style={styles.forgetpassword_top_content}>
          <Text style={styles.forgetpassword_header}>Reset your password</Text>
        </View>
      </View>
      <ValueInput
        placeholder="Email"
        name="email"
        control={control}
        texts ={'Your Email'}
        secureTextEntry={false}
        rules={{required:"  Email is required",
          pattern:{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid Email Address',
          },
          minLength: {
          value: 8,
          message: 'Invalid Email Address',
        }
          }}
        icons={false}  
      />
      <CustButton text="Change Password" onPressing={handleSubmit(onSend)} />
      <View style={{margin: 10}}>
        <Text onPress={onsigninclicking}>Back to Sign In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#fff"
  },
  forgetpassword_header_content: {
    width: 229,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#B8B8D2',
  },
  forgetpassword_top_content: {
    width: '100%',
    height: 63,
    paddingLeft: 9,
  },
  forgetpassword_top: {
    width: '100%',
    backgroundColor: '#F0F0F2',
    height: '20%',
    textAlign: 'left',
    justifyContent: 'flex-end',
    padding: 10,
  },
  forgetpassword_header: {
    fontFamily: 'Poppins',
    fontSize: 32,
    lineHeight: 48,
    color: '#1F1F39',
    fontWeight: '700',
  },
});
export default ForgetPassword;
