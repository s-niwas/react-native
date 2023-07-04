import {React, useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import ValueInput from '../CustInput/valueInput';
import CustButton from '../CustButton/CustButton';
import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const navi =useNavigation();
  const {height} = useWindowDimensions();
  const [code, setCode] = useState(0);
  const[password,setPassword]=useState('');
  const onSubmitting = () => {
    navi.navigate('SignIn');
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
        placeholder="Enter your confirmation Code"
        value={code}
        setvalue={setCode}
        texts={'Confirmation Code'}
        secureTextEntry={true}
      />
      <ValueInput
        placeholder="Enter your new password"
        value={password}
        setvalue={setPassword}
        texts={'Password'}
        secureTextEntry={true}
        icons={true}
      />
      <CustButton text="Submit" onPressing={onSubmitting} />
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
