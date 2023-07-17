import React from "react";
import { StyleSheet, View } from "react-native";
import YouTube from "react-native-youtube";

export default LinkScreen=(route)=>{
    const link=route.route.params.link;
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{backgroundColor:"#00f",height:'50%',width:'100%'}}>
    <YouTube
    style={{width:'90%'}}
    apiKey='AIzaSyA0ycRObkW4HjFZ3BSzxEKrFae4VPoP2hU'
     videoId={link}/>
    {/* <Video
          source={require('./vid.mp4')}
          style={styles.backgroundVideo}
          controls={true}
          />*/}
    </View>
    </View>
    );
}