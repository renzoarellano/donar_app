import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
const InputForm = ({
  label,
  name,
  placeholder,
  type,
  valueInput,
  setValueInput,
  validateInput,
  setValidateInput,
  functionValidation,
  disabledInput,
  limitCaracteres,
  errorMessage,
}) => {
  const validateFunction = (e) => {
    if (functionValidation(e)) {
      setValidateInput(true);
    } else {
      setValidateInput(false);
    }
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
          autoCompleteType={type}
          value={valueInput}
          editable={disabledInput}
          maxLength={limitCaracteres}
          style={styles.inputWidth}
          onChangeText={(e) => validateFunction(e)}
        />
        {typeof valueInput === 'undefined' ||
        valueInput.length === 0 ? null : !validateInput ? (
          <Image
            source={require('../assets/images/error.png')}
            style={styles.icon1}
          />
        ) : (
          <Image
            source={require('../assets/images/check.png')}
            style={styles.icon1}
          />
        )}
      </View>
      {typeof valueInput === 'undefined' ||
      valueInput.length === 0 ? null : !validateInput ? (
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
});

export default InputForm;
