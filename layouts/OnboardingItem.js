import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import slide from './slide';
import {useNavigation} from '@react-navigation/native';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  const colorScheme=useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const imageBackgroundColor = isDarkMode ? "#1F1F39":'#CDECFE' //#D9F4F1
  
  const contentBackgroundColor = isDarkMode ? '#1F1F39' : '#FFFFFF';
  const textColor = isDarkMode ? 'white' : '#000000';;
  
  //const ref = React.useRef();
  //const [idd, setid] = useState(0);
  const skippingpress = () => {
    //const lastIndex = slide.length - 1;
   // const offset = lastIndex * width;
    //ref?.current.scrollToOffset({offset});
    //setid(1);
  };
  const navi = useNavigation();
  const signuppage = () => {
    navi.navigate('SignUp');
  };
  const loginpage = () => {
    navi.navigate('SignIn');
  };
//   const imagebackgroundColor = theme === 'light' ? '#CDECFE' : '#1F1F39';
// const contentbackgroundColor = theme === 'light' ? '#FFFFFF' : '#1F1F39';

  return (
    <View style={[styles.container, {width , backgroundColor: contentBackgroundColor}]}>
      {item.id != 3 ? (
        <Text style={styles.skip} onPress={skippingpress}>
          {item.skip}
        </Text>
      ) : null}
      {/* {item.id ===1 ? imageBackgroundColor = isDarkMode ? "#1F1F39":'#CDECFE':null}
      {item.id ===2 ? imageBackgroundColor = isDarkMode ? "#1F1F39":'#D9F4F1':null}
      {item.id ===3 ? imageBackgroundColor = isDarkMode ? "#1F1F39":'#FFFFFF':null} */}
      {item.id === 3
        ? () => {
            setid(true);
          }
        : null}
      <Image source={item.image} style={[styles.image,{ backgroundColor: imageBackgroundColor }]} />
      <View style={{flex: 0.3, justifyContent: 'center'}}>
        <Text style={[styles.title,{ color:textColor }]}>{item.title}</Text>
        <Text style={[styles.description,{ color:textColor }]}>{item.description}</Text>
        <View style={styles.buttons}>
          {item.id == 3 ? (
            <TouchableOpacity onPress={signuppage} style={styles.signup1}>
              <Text style={styles.signup2}>Sign Up </Text>
            </TouchableOpacity>
          ) : null}
          <Text> </Text>
          {item.id == 3 ? (
            <TouchableOpacity onPress={loginpage} style={styles.signin1}>
              <Text style={styles.signin2}>Log in </Text>
            </TouchableOpacity>
          ) : null}
          </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:contentbackgroundColor,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    marginHorizontal: 30,
    letterSpacing: 20,
  },
  signup1: {
    backgroundColor: '#3D5CFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 160,
  },
  signup2: {
    fontSize: 18,
    color: '#ffffff',
    alignSelf: 'center',
  },
  signin1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#3D5CFF',
    borderWidth: 1,
    width: 160,
  },
  signin2: {
    fontSize: 18,
    color: '#3D5CFF',
    alignSelf: 'center',
  },
  image: {
    justifyContent: 'center',
    width: 260,
    height: 260,
    alignItems: 'center',
    margin: 50,
    
  },
  skip: {
    fontSize: 20,
    color: '#858597',
    alignItems: 'flex-end',
    // textAlign:'justify',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    fontFamily: 'Poppins',
    paddingLeft: 330,
  },
  title: {
    fontWeight: '800',
    fontSize: 22,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 33,
    fontFamily: 'Poppins',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#858597',
    textAlign: 'center',
    paddingHorizontal: 'auto',
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 24,
    //width:'70%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
