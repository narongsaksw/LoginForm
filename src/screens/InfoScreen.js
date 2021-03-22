import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const InfoScreen = () => {
  const citizenId = useSelector(state => state.user.citizenId);
  const phoneNumber = useSelector(state => state.user.phoneNumber);
  const navigation = useNavigation();
  const onEdit = () => {
    navigation.navigate('editInfo', {
      citizenId,
      phoneNumber,
    });
  };
  return (
    <View style={styles.container}>
      <Text>Citizen ID</Text>
      <Text>{citizenId}</Text>
      <Text>Phone Number</Text>
      <Text>{phoneNumber}</Text>
      <Button title="Edit" onPress={onEdit} />
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

export default InfoScreen;
