import {React, useState} from 'react';
import {Alert, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import ValueInput from '../CustInput/valueInput';
import CustButton from '../CustButton/CustButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const NewPassword = () => {
  const navi = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {height} = useWindowDimensions();
  const [code, setCode] = useState(0);
  const [password, setPassword] = useState('');
  const onSubmitting = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      Alert.alert('Successful', 'Password Reset Successfully');
      navi.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
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
        name="username"
        control={control}
        texts={'Your Email'}
        secureTextEntry={false}
        editable={true}
        icons={false}
      />
      <ValueInput
        placeholder="Enter your confirmation Code"
        texts={'Confirmation Code'}
        name="code"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Code is required',
          pattern: {
            value: /^\d+$/,
            message: 'Only numbers allowed',
          },
          minLength: {
            value: 6,
            message: 'Only 6 digits',
          },
          maxLength: {
            value: 6,
            message: 'Only 6 digits',
          },
        }}
        keyboards="numeric"
      />
      <ValueInput
        placeholder="Password"
        name="password"
        control={control}
        secureTextEntry={true}
        icons={true}
        texts={'Password'}
        rules={{
          required: '  Password is required',
          minLength: {
            value: 8,
            message: 'Password should have a minimum length of 8 characters',
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
            message:
              'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character',
          },
        }}
      />
      <CustButton text="Submit" onPressing={handleSubmit(onSubmitting)} />
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
export default NewPassword;
