// import React, { useRef, useState } from "react";
// import {  Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
// import slide from "./slide";
// import Currentpagenavigation from "./currentpagenavigation";
// const{width,height}=Dimensions.get('window');

// export default Onboarding = ({navigate})=>{
//     const [currentIndex,setCurrentIndex]=useState(0);
//     const reference=React.useRef();

//     const updateCurrentIndex = e => {
//         const offset = e.nativeEvent.contentOffset.x;
//         const currentIndeX = Math.round(offset / width);
//         setCurrentIndex(currentIndeX);
//       };

//       const Skipping=()=>{
//         const lastSlide=slide.length-1;
//         const off=lastSlide*width;
//         reference?.current.scrollToOffset({off});
//       setCurrentIndex(lastSlide);
//       };
      
//       const OnboardingItem=({item})=>{  
//         return(
//             <View style={[styles.itemcontainer,{width}]}>
//                 <Text style={styles.skipp} onPress={Skipping}>{item.skip} </Text> 
//                 <Image source={item.image} style={[styles.image]}/>
//                 <View style={{flex:0.3}}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </View> 
//             </View>
//         );
//     };
    
//       const NavigateSlider=()=>{
//         return(
//         <View style={styles.navigation_container}>
//             {/* <View style={styles.dot}> */}
//           {slide.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.indicator,
//                 currentIndex == index && {
//                   backgroundColor:"#ffffff",
//                   width: 25,
//                 },
//               ]}
//             />
//           ))}
//         {/* </View> */}
//         <View style={{marginBottom: 20}}>
//           {currentIndex == slide.length - 1 ? (
//             <View style={styles.buttons}>
//                 <TouchableOpacity style={styles.signup1} >
//                     <Text style={styles.signup2}>Sign Up </Text>
//                 </TouchableOpacity>
//                 <Text>  </Text>
//                 <TouchableOpacity style={styles.signin1} >
//                     <Text style={styles.signin2}>Log in </Text>
//                 </TouchableOpacity>     
//             </View>
//            ) : (<View><Text>{"\n\n\n\n"}</Text></View>)}
//           </View>
//           </View>

//           )};
        
//     return(
//         <View style={styles.container}>
//         <View style={{flex:3}}>
//             <FlatList 
//             data={slide}
//              renderItem={({item})=><OnboardingItem item={item}/>}
//                 contentContainerStyle={{height:height*0.75}}
//                 horizontal
//                 showsHorizontalScrollIndicator={true}
//                 pagingEnabled
//                 ref={reference}
//                 onMomentumScrollEnd={updateCurrentIndex}  
//              />
//              <NavigateSlider/>
//         </View>      
//         </View>
//     );
// };

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         // width:"100%",
//         // height:"100%",
//     },
//     itemcontainer:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     navigation_container:{
//         //height: height * 0.25,
//         justifyContent: 'space-between',
//         paddingHorizontal: 20,
//     },
//     dot:{
//         flexDirection: 'row',
//             justifyContent: 'center',
//             marginTop: 20,
//     },
//     buttons:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'center',
//         padding:25,
//         marginHorizontal:30,
//         letterSpacing:20,
        
//     },
//     signup1:{
//     backgroundColor: "#3D5CFF",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     width:160,
//     },
//     signup2:{
//     fontSize: 18,
//     color: "#ffffff",
//     alignSelf: "center",
//     },
//     signin1:{
//         backgroundColor: "#fff",
//         borderRadius: 10,
//         paddingVertical: 10,
//         paddingHorizontal: 12,
//         borderColor:"#3D5CFF",
//         borderWidth: 1,
//         width:160,
//     },
//     signin2:{
//         fontSize: 18,
//         color: "#3D5CFF",
//         alignSelf: "center",
//     },
//     image:{
        
//         justifyContent:'center' ,
//         width:260,
//         height:260,
//         alignItems:'center',
//         margin:50
//     },
//     skipp:{
//         fontSize:20,
//         color:"#858597",
//         alignItems:'flex-end',
//         // textAlign:'justify',
//         justifyContent:'flex-end',
//         alignContent:'flex-end',
//         fontFamily:'Poppins',
//         paddingLeft:330,
//     },
//     title:{
//         fontWeight:'800',
//         fontSize:22,
//         marginBottom:10,
//         color:'#000000',
//         textAlign:'center',
//         lineHeight:33,
//         fontFamily:'Poppins',
//         justifyContent:'center',
//         alignItems:'center',
//     },
//     description:{
//         fontWeight:'300',
//         color:'#858597',
//         textAlign:'center',
//         paddingHorizontal:'auto',
//         fontFamily:'Poppins',
//         fontSize:16,
//         lineHeight:24,
//         position:'relative',
//         justifyContent:'center',
//         alignItems:'center',
//         maxWidth:'70%',
//     },
    
// });