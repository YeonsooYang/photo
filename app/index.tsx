import Button from '@/components/Button';
import Input, { InputTypes, ReturnKeyTypes } from '@/components/input';
import SafeInputView from '@/components/SafeInputView';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeInputView>
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input
        value={email}
        onChangeType={(text) => setEmail(text)}
        inputType={InputTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
        styles={inputStyles}
      />
      <Input
        value={password}
        onChangeType={(text) => setPassword(text)}
        inputType={InputTypes.PASSWORD}
        returnKeyType={ReturnKeyTypes.DONE}
        styles={inputStyles}
      />
      <Button
      title="Sign Up"
      onPress={()=>{}}
      styles={{
        container:{
          paddingHorizontal:20,
          marginTop:20,
        },
      }}
      />
    </View>
    </SafeInputView>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default SignInScreen;
