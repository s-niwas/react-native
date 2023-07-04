
// import React, { useState } from 'react';
// import {

//   Button,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [skip,setskip]=useState(0);
//   const skipping=()=>{setskip(1)};

//   // const backgroundStyle = {
//   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   // };

//   return (
    
//           <View style={{
//             alignItems:'center',
//             justifyContent:'center',
//             flex:1,
//           }}>
//             <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//             <View style={{justifyContent:'flex-end', flexDirection:'row', width:'auto', paddingLeft:260}}>
//             <Text style={{fontSize:20, color:"#858597"}} onPress={skipping}>Skip-{skip}{"\n\n"}</Text>
//             </View>
        
            
//           <Image
//       source={require('./Screen1_bg_white.jpg')} 
//       style={styles.image}
//     />
//     <Text style={{fontWeight:"bold", textAlign:"center", fontSize:22,color:Colors.black }}>Numerous free</Text>
//     <Text style={{fontWeight:"bold", textAlign:"center", fontSize:22,color:Colors.black }}>trial courses</Text>
//     <Text style={{color:"#858597",textAlign:"center", fontSize:16,marginTop:10 }}>Free courses for you to</Text>
//     <Text style={{color:"#858597",textAlign:"center", fontSize:16}}>find your way to learning</Text>
//         </View>
//         </View>
  
//   );
// }

// const styles = StyleSheet.create({
//   image:{
//     backgroundColor:"#ffffff",
//     width: 260, 
//     height: 260,
//     alignItems:'center',
//     marginLeft:25,
//     margin:15
//   },
//   backgroundStyle:{
//    backgroundColor:"#ffffff",
//     alignItems:'center',
//     justifyContent:'center',
//     flex:1,
//   }
  
  
// });

// export default App;
