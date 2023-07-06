import React from 'react';
import NavigationScreen from './src/navigationscreen';
import {Amplify,Auth} from 'aws-amplify';
import config from './aws-exports';
import {SafeAreaView, StyleSheet} from 'react-native';
//import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';
Amplify.configure(config);


const App = () => {
  //Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <NavigationScreen />
    </SafeAreaView>
  );
};


const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  }
});

export default App;


// export default withAuthenticator(App,{signUpConfig , theme:customTheme});

// const signUpConfig = {
//   header:"My customised Sign Up",
//   hideAllDefaults:true,
//   signUpFields:[
//     {
//       label:"Email",
//       key:"email",
//       required:true,
//       displayOrder:1,
//       type:"string",
//     },
//     {
//       label:"Password",
//       key:"password",
//       required:true,
//       displayOrder:2,
//       type:"password",
//     },
//     {
//       label:"Username",
//       key:"username",
//       required:true,
//       displayOrder:3,
//       type:"string",
//     },
//   ]
// };

// const customTheme={...AmplifyTheme,
//     button:{
//       ...AmplifyTheme.button,
//       backgroundColor:'blue',
//     }
// }