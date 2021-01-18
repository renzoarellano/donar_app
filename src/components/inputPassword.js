import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Eye from '../assets/svg/eye';
import EyeFill from '../assets/svg/eye-fill';

const InputPassword = ({
  label,
  name,
  placeholder,
  type,
  valueInput,
  validateInput,
  setValueInput,
  setValidateInput,
  functionValidation,
  errorMessage,
}) => {
  const [inputValue, setInputValue] = useState(valueInput);
  const [validate, setValidate] = useState(validateInput);
  const [showPassword, setShowPassword] = useState(true);
  const validateFunction = (e) => {
    if (functionValidation(e)) {
      setValidate(true);
      setValidateInput(true);
    } else {
      setValidate(false);
      setValidateInput(false);
    }
    setInputValue(e);
    setValueInput(e);
  };

  return (
    <>
      <Text style={styles.label}>{label}:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label={label}
          name={name}
          placeholder={placeholder}
          textContentType="password"
          autoCompleteType={type}
          secureTextEntry={showPassword}
          value={inputValue}
          style={styles.inputWidth}
          onChangeText={(e) => validateFunction(e)}
        />
        <TouchableOpacity
          style={styles.icon2btn}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Eye width={25} height={25} style={styles.icon2} />
          ) : (
            <EyeFill width={25} height={25} style={styles.icon2} />
          )}
        </TouchableOpacity>
      </View>
      {typeof inputValue === 'undefined' ||
      inputValue.length === 0 ? null : !validate ? (
        <Text style={styles.alert1}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

const dim = Dimensions.get('screen');

const width =
  dim.height >= dim.width
    ? Dimensions.get('window').width
    : Dimensions.get('window').height;
const height =
  dim.height >= dim.width
    ? Dimensions.get('window').height
    : Dimensions.get('window').width;

const styles = StyleSheet.create({
  label: {
    fontSize: width * 0.035,
    paddingLeft: width * 0.01,
    marginTop: 15,
    paddingBottom: height * 0.01,
    color: '#122E5c',
    fontFamily: 'ProximaNova-Regular',
  },
  inputContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: width * 0.02,
    marginBottom: 6,
    fontSize: 13,
    height: height * 0.07,
    borderWidth: 1,
    borderRadius: width * 0.04,
    width: '100%',
    backgroundColor: '#FDFEFE',
    borderColor: '#B3B3B3',
  },
  inputWidth: {
    width: '85%',
    color: '#122E5c',
    fontFamily: 'ProximaNova-Regular',
  },
  icon1: {
    resizeMode: 'center',
    position: 'absolute',
    marginRight: 15,
    right: 0,
    width: 25,
    height: 25,
    backgroundColor: 'white',
  },
  alert1: {
    color: '#FF3030',
    paddingLeft: width * 0.02,
    paddingBottom: height * 0.02,
    fontFamily: 'ProximaNova-Regular',
    fontSize: width * 0.03,
  },
  icon2btn: {
    resizeMode: 'center',
    position: 'absolute',
    marginRight: 15,
    right: 0,
    backgroundColor: 'white',
  },
});

export default InputPassword;
