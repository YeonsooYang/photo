import { authFormReducer, AuthFormTypes, initAuthForm } from '@/components/AuthFormReducer';
import Button from '@/components/Button';
import HR from '@/components/HR';
import Input, { InputTypes, ReturnKeyTypes } from '@/components/input';
import SafeInputView from '@/components/SafeInputView';
import { WHITE } from '@/constants/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignInScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const passwordRef = useRef();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [disabled, setDisabled] = useState(true);

  const [form, dispatch] = useReducer(authFormReducer,initAuthForm);

  // useEffect(()=> {
  //   setDisabled(!email || !password);
  // }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if(!form.disabled && !form.isLoading){
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      console.log(form.email, form.password);
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
    }
  };

  useFocusEffect(
    useCallback(() => {
      console.log('focus');
      return () => dispatch({type:AuthFormTypes.RESET});
    },[])
  );

  const updateForm = (payload) => {
    const newForm = {...form, ...payload};
    const disabled = !newForm.email || newForm.password;

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: {disabled, ...payload},
    });
  };

  return (
    <SafeInputView>
      <StatusBar style="light" />
    <View style={[styles.container, {paddingTop : top}]}>
      <View style={StyleSheet.absoluteFill}>
        <Image 
          source={require("../assets/images/cover.png")} 
          style={{width:'100%'}} 
          resizeMode='cover'
          />
      </View>

      <View style={[styles.form, {paddingBottom : bottom ? bottom+10 : 40},
      ]}>
      <Input
        value={form.email}
        onChangeText={(text) => updateForm({email: text.trim() })}
        inputType={InputTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
        //styles={inputStyles}
        onSubmitEditing={() => passwordRef.current.focus()}
        styles={{container : {marginBottom:20}}}
      />
      <Input
        ref={passwordRef}
        value={form.password}
        onChangeText={(text) => updateForm({password: text.trim() })}
        inputType={InputTypes.PASSWORD}
        returnKeyType={ReturnKeyTypes.DONE}
        //styles={inputStyles}
        onSubmitEditing={onSubmit}
        styles={{container : {marginBottom:20}}}
      />
      <Button
      title="로그인"
      onPress={onSubmit}
      disabled={form.disabled}
      isLoading={form.isLoading}
      styles={{
        container:{
          //paddingHorizontal:20,
          marginTop:20,
        },
      }}
      />

      <HR text="OR" styles={{container:{marginVertical: 30} }}/>
      <Link href='SignUpScreen'>회원가입</Link>

      
      </View>
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
    justifyContent:'flex-end',
    //justifyContent:'center',
    //alignItems:'center',
    //paddingHorizontal:20,
  },
  form:{
    alignItems:'center',
    backgroundColor:WHITE,
    paddingHorizontal:20,
    paddingTop:40,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
});

export default SignInScreen;
