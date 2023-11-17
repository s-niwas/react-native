import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput,IconButton} from 'react-native-paper';
const ValueInput = ({
  control,
  name,
  placeholder,
  texts,
  rules = {},
  secureTextEntry,
  icons = false,
  editable = true,
  keyboards = null,
}) => {
  const [visibility, setVisibility] = useState(secureTextEntry);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{texts}</Text>
      {icons == true ? (
        <Controller
          control={control}
          name={name}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={visibility}
                mode="outlined"
                editable={editable}
                theme={{
                  colors: {background: '#fff', primary: error ? '#f00' : null},
                }}
                selectionColor={error ? '#f00' : 'gray'}
                right={
                  <TextInput.Icon
                    icon={visibility ?'eye-off' : 'eye'}
                    color="black"
                    onPress={() => setVisibility(!visibility)}
                  />
                }
              />
              {error && (
                <Text style={{color: '#f00', alignSelf: 'stretch'}}>
                  {error.message}
                </Text>
              )}
            </View>
          )}
          rules={rules}
          defaultValue=""
        />
      ) : (
        <Controller
          control={control}
          name={name}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={visibility}
                mode="outlined"
                keyboardType={keyboards}
                editable={editable}
                theme={{
                  colors: {
                    background: '#fff',
                    primary: error ? '#f00' : null,
                    accent: error ? 'blue' : 'blue',
                  },
                }}
                selectionColor={error ? '#f00' : 'gray'}
              />
              {error && (
                <Text style={{color: '#f00', alignSelf: 'stretch'}}>
                  {error.message}
                </Text>
              )}
            </>
          )}
          rules={rules}
          defaultValue=""
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
  },
  inputcontainer: {
    width: '100%',
  },
  header: {
    color: '#858597',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins',
  },
});
export default ValueInput;

//    <TextInput
// value={value}
// mode="outlined"
// onChangeText={setvalue}
// placeholder={placeholder}
// secureTextEntry={visibility}
// theme={{colors:{background:'#fff'}}}
// />
