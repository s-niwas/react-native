import React from "react";
import { Animated, StyleSheet, Text, View, useWindowDimensions } from "react-native";

export default Currentpagenavigation=({data,scrollX})=>{
    const {width}=useWindowDimensions();
    return(
        <View style={styles.container}>
            {data.map((_, i)=>{
                const inputRange=[(i-1)*width,i*width,(i+1)*width];

                const dotWidth=scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',

                });

                const opa=scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate:'clamp',
                })

                return (
                    <Animated.View 
                    style={[
                        styles.dot,
                        {
                            width:dotWidth,
                            opa,
                        },
                        ]
                    } key={i.toString()}

                    />
                );
            })}
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
       
        flexDirection:'row',
        height:64,
    },
    dot:{
        height:10,
        borderRadius:5, 
        backgroundColor:"#3D5CFF",
        marginHorizontal:8,

    }
})