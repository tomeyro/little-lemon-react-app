import * as React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { commonStyle } from '../utils/common';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState();

  const [validEmail, setValidEmail] = React.useState(false);

  const verifyEmail = (newEmail) => {
    newEmail = (newEmail || '').trim();
    setEmail(newEmail);
    setValidEmail(validateEmail(newEmail));
  }

  const subscribe = () => {
    if (!validEmail) {
      Alert.alert("Please enter a valid email address");
    } else {
      Alert.alert("Thanks for subscribing, stay tuned!");
    }
    setEmail("");
    setValidEmail(false);
  };

  return (
    <View style={commonStyle.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={commonStyle.image}
        resizeMode="contain"
      />
      <Text style={commonStyle.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        value={email}
        onChangeText={verifyEmail}
        style={commonStyle.textInput}
        placeholder="Type your email"
        keyboardType="email-address"
        inputMode="email"
        autoCapitalize="none"
        clearButtonMode="always"
      />
      <Pressable
        style={[commonStyle.button, !validEmail ? commonStyle.disabledButton : {}]}
        onPress={subscribe}
        disabled={!validEmail}
      >
        <Text style={commonStyle.buttonText}>
          Subscribe
        </Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 200,
  }
})

export default SubscribeScreen;
