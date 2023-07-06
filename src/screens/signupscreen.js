import {React, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import ValueInput from '../components/CustInput/valueInput';
import CustButton from '../components/CustButton/CustButton';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignUpScreen = () => {
  const navi = useNavigation();
  const {control, handleSubmit} = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const onSignUpClick = async data => {
    if (isChecked) {
      console.warn('success sign up');
      console.log(data);
      const {email, password} = data;
      try {
        await Auth.signUp({
          username: email,
          email,
          password,
        });
        navi.navigate('ConfirmEmail', {email});
      } catch (e) {
        Alert.alert('Oops', e.message);
      }
    } else {
      console.warn('accept terms');
    }
  };

  const onsigninclicking = () => {
    navi.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <View style={styles.signup_top}>
        <View style={styles.signup_top_content}>
          <Text style={styles.signup_header}>Sign Up</Text>
          <Text style={styles.signup_header_content}>
            Enter your details below & free sign up
          </Text>
        </View>
      </View>
      <ValueInput
        placeholder="Email"
        name="email"
        control={control}
        texts={'Your Email'}
        secureTextEntry={false}
        rules={{
          required: '  Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid Email Address',
          },
          minLength: {
            value: 8,
            message: 'Invalid Email Address',
          },
        }}
        icons={false}
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

      <CustButton
        text="Create account"
        onPressing={handleSubmit(onSignUpClick)}
      />
      <View style={{flexDirection: 'row', width: '85%', margin: 13}}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setIsChecked(!isChecked);
          }}
        />
        <Text style={styles.checkbox}>
          By creating an account you have to agree with our them & condition.
        </Text>
      </View>
      <View style={{margin: 10}}>
        <Text>
          Already have an account ?
          <Text
            style={{
              color: '#3D5CFF',
              fontWeight: '700',
              textDecorationLine: 'underline',
            }}
            onPress={onsigninclicking}>
            {' '}
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  checkbox: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    alignItems: 'flex-start',
    color: '#858597',
    justifyContent: 'flex-start',
    width: '80%',
  },
  signup_header_content: {
    width: 229,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: '#B8B8D2',
  },
  signup_top_content: {
    width: 229,
    height: 63,
    paddingLeft: 9,
  },
  signup_top: {
    width: '100%',
    backgroundColor: '#F0F0F2',
    height: '20%',
    textAlign: 'left',
    justifyContent: 'flex-end',
    padding: 10,
  },
  signup_header: {
    fontFamily: 'Poppins',
    fontSize: 32,
    lineHeight: 48,
    color: '#1F1F39',
    fontWeight: '700',
  },
  button: {},
});
export default SignUpScreen;
