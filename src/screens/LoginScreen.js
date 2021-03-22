import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import IdValidator from 'thai-id-validator';
import {useDispatch} from 'react-redux';
import {setIsUserAuthorization, setUser} from '../store/models/user';

const LoginScreen = () => {
  const [citizenId, setOnCitizenIdChange] = useState('');
  const [phoneNumber, setOnPhoneNumberChange] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const onLogin = () => {
    if (citizenId !== null && phoneNumber !== null) {
      dispatch(setIsUserAuthorization(true));
      const user = {
        citizenId,
        phoneNumber,
      };
      dispatch(setUser(user));
    }
  };

  console.log(disabled);
  const onCitizenIdChange = text => {
    if (text !== '') {
      setDisabled(false);
    }
    setOnCitizenIdChange(text);
  };
  const onPhoneNumberChange = text => {
    if (text !== '') {
      setDisabled(false);
    }
    setOnPhoneNumberChange(text);
  };
  return (
    <View style={styles.container}>
      <Text>Citizen ID</Text>
      <TextInput
        placeholder="enter Citizen ID"
        value={citizenId}
        onChangeText={onCitizenIdChange}
        style={styles.input}
        keyboardType="numeric"
        maxLength={13}
      />
      <Text>Phone Number</Text>
      <TextInput
        placeholder="enter Phone Number"
        value={phoneNumber}
        onChangeText={onPhoneNumberChange}
        style={styles.input}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button title="Login" onPress={onLogin} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
  },
});

export default LoginScreen;
