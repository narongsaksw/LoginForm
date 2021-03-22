import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setUser} from '../store/models/user';

const EditInfoScreen = ({route}) => {
  const [citizenId, setOnCitizenIdChange] = useState(route.params.citizenId);
  const [phoneNumber, setOnPhoneNumberChange] = useState(
    route.params.phoneNumber,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onEdit = () => {
    if (citizenId !== null && phoneNumber !== null) {
      const user = {
        citizenId,
        phoneNumber,
      };
      dispatch(setUser(user));
    }
    navigation.navigate('info');
  };
  return (
    <View style={styles.container}>
      <Text>Citizen ID</Text>
      <TextInput
        placeholder="enter Citizen ID"
        value={citizenId}
        onChangeText={setOnCitizenIdChange}
        style={styles.input}
        keyboardType="numeric"
        maxLength={13}
      />
      <Text>Phone Number</Text>
      <TextInput
        placeholder="enter Phone Number"
        value={phoneNumber}
        onChangeText={setOnPhoneNumberChange}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={onEdit} />
      <View style={styles.button}>
        <Button title="Cancel" onPress={() => navigation.navigate('info')} />
      </View>
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
  button: {
    marginVertical: 10,
  },
});

export default EditInfoScreen;
