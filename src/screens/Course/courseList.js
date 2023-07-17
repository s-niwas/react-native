import React from 'react';
import { Text } from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import {View} from 'react-native';


export default class CourseList extends React.Component {
  
  render() {
    
    const {img, title, bg, links,onPress, description,percent} = this.props;
    
    handlePress=()=>{
      console.log(links);
      this.props.navigation.navigate('LinkScreen',{link:links});
      
      }
    return (
        <TouchableOpacity 
        onLongPress={handlePress}
          onPress={onPress}
          style={{
            flexDirection: 'row',
            backgroundColor: bg,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 10,
          }}>
          
          <Image source={img} style={{width:70, height: 40}}></Image>

          <View>
            <Text
              style={{
                color: '#3D5CFF',
                fontSize: 13,
                paddingHorizontal: 20,
                width: 170,
                fontFamily: 'Bold',
              }}>
              {title}
            </Text>
            <Text style={{
            color:"#f57509",
          fontSize:12,
          paddingHorizontal:20,
          width: 200,
          }}>{description}</Text>
          </View>
          <Text style={{color:"#345c74",
          fontFamily:"Medium",
          fontSize:13,
          paddingRight:10
          }}>
            {percent}
          </Text>
          
        </TouchableOpacity>
    );
  }
}
