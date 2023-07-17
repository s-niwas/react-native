import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {Amplify, Auth} from 'aws-amplify';
import ValueInput from '../components/valueInput/valueInput';
import CustButton from '../components/CustomButton/CustomButton';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {Text} from 'react-native';

const SignInScreen = () => {
  const navi = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  console.log(errors);
  const {height} = useWindowDimensions();

  const onSignInClick = async data => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.email, data.password);
      console.log(response);
      navi.navigate('HomeScreen');
    } catch (e) {
      Alert.alert('Incorrect', e.message);
    }
    setLoading(false);
    console.log(data);
    //navi.navigate('HomeScreen');
  };
  const onForgetPasswordClick = () => {
    navi.navigate('ForgetPassword');
  };
  const onsignupclicking = () => {
    navi.navigate('SignUp');
  };
  const onsigninwithgoogle = async () => {
    Auth.signOut;
    console.warn('Redirecting to google sign in');
    try {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      console.log('Google sign-in success');
    } catch (e) {
      console.log('Error signing with google :', e);
    }
    // try {
    //   await GoogleSignin.configure({
    //     webClientId:'630647575570-eohgnl8q5l6snjvm7pormifncgk4f6jc.apps.googleusercontent.com'
    //   }); // Configure Google Sign-In
    //   await GoogleSignin.hasPlayServices();
    //   const { idToken } = await GoogleSignin.signIn();
    //   await Auth.federatedSignIn( {
    //     provider: CognitoHostedUIIdentityProvider.Google,
    //       token:{ idToken }});
    //   console.log('Google sign-in successful');
    // } catch (error) {
    //   console.log('Error signing in with Google:', error);
    // }
  };

  const onsigninwithfacebook = async () => {
    console.warn('Redirecting to facebook sign in');
    Auth.
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
    // try {
    //   Auth.federatedSignIn({
    //     provider: CognitoHostedUIIdentityProvider.Facebook,
    //   });
      
    //   console.log('Facebook sign-in success');
    // } catch (e) {
    //   console.log('Error signing with google :', e);
    // }

  };
  return (
    <View style={styles.root}>
      <View style={styles.signin_top}>
        <Text style={styles.signin_header}>Log In</Text>
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
        text="Forget password?"
        onPressing={onForgetPasswordClick}
        type="TERTIARY"
      />
      <CustButton
        text={loading ? 'Loading...' : 'Sign In'}
        onPressing={handleSubmit(onSignInClick)}
      />
      <View style={{margin: 10}}>
        <Text>
          Don't have an account?
          <Text style={{color: '#3D5CFF'}} onPress={onsignupclicking}>
            Sign up
          </Text>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#B8B8D2',
            marginHorizontal: 10,
          }}
        />
        <Text style={{fontSize: 14}}>Or login with</Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#B8B8D2',
            marginHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Pressable onPress={onsigninwithgoogle}>
          <Image
            source={require('./google.png')}
            style={{width: 58, height: 58, borderRadius: 33}}
          />
        </Pressable>
        <Text> </Text>
        <Pressable onPress={onsigninwithfacebook}>
          <Image
            source={require('./fb_logo.png')}
            style={{width: 60, height: 60, borderRadius: 60 / 2}}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  signin_top: {
    width: '100%',
    backgroundColor: '#F0F0F2',
    height: '20%',
    textAlign: 'left',
    justifyContent: 'flex-end',
    padding: 10,
  },
  signin_header: {
    width: 96,
    height: 48,
    fontFamily: 'Poppins',
    fontSize: 32,
    lineHeight: 48,
    color: '#1F1F39',
    fontWeight: '700',
    marginBottom: 10,
  },
  button: {},
});
export default SignInScreen;
