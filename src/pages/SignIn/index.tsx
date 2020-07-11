import React from 'react';
import {useAuth} from '../../contexts/auth';

import {View, Button, StyleSheet} from 'react-native';
import Input from '../../components/Input';



const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'}
})

const SignIn: React.FC = () => {

  const {signed, signIn, user} = useAuth();
  console.log(signed)
  console.log(user)

  function handleSignIn(){
    signIn()
  }
  return (


    




          <View style={styles.container}>

            <Input name="email" type="email" label="Endereço de E-mail" />

            <Input name="password" type="password" label="Senha" />

            <Button title="Sign In" onPress={handleSignIn} />
          </View>
  );
};

export default SignIn;
