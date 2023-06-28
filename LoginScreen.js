import React, {useState} from 'react';
import { ScrollView,Button, Text, Alert, TextInput, StyleSheet} from 'react-native';

export default function LoginScreen() {

    const handleSubmit = () => {
        // Perform any necessary validation or submit the data
        if (phoneNumber && password) {
          // Example: Display an alert with the submitted data
          Alert.alert('Submitted Data', `Phone Number: ${phoneNumber}\nPassword: ${password}`);
        } else {
          Alert.alert('Error', 'Please enter both phone number and password');
        }
      };
    
  const [phoneNumber, onChangePhoneNumber] = useState('');
   const [password, onChangePassword] = useState('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter PhoneNumber'
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        keyboardType = {'number-pad'}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Password'
        value={password}
        onChangeText={onChangePassword}
      />
       <Button
       style={styles.button}
        title="Submit"
         onPress={handleSubmit}
        
/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input:{
   fontSize: 30,
   color: "black",
   alignItems:'center',
   height: 100,
   margin: 12,
   borderWidth: 2,
  },
  button:{
  backgroundColor: "red",
  fontColor:"pink",
  fontSize:50,
  borderRadius: 8,
  padding: 20,
  marginTop: 20,
  alignSelf: 'center',
  },
});

