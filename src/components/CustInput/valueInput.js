import React from "react";
import { Text, View ,TextInput, StyleSheet} from "react-native";

const ValueInput=({value,setvalue,placeholder,texts,secureTextEntry})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{texts}</Text>
            <TextInput 
                value={value}
                onChangeText={setvalue}
                style={styles.input}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginVertical:10,
        width:"100%"
    },
    header:{
        color:"#858597",
        fontSize:14,
        lineHeight:21,
        fontFamily:"Poppins", 
    },
    input:{
        borderColor:"#858597",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:20,
    }
})
export default ValueInput;