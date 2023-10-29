import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { commonStyle, colors } from '../utils/common';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyle.container}>
      <View style={[commonStyle.container, commonStyle.noPadding]}>
        <Image
          source={require('../assets/little-lemon-logo.png')}
          style={[commonStyle.image, style.image]}
          resizeMode="contain"
        />
        <Text style={[commonStyle.text, style.text]}>
          <Text style={[style.highlightText]}>Little Lemon</Text>, your local {'\n'} Mediterranian Bistro.
        </Text>
      </View>
      <Pressable style={commonStyle.button} onPress={() => navigation.navigate("Subscribe")}>
        <Text style={commonStyle.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    flex: .6,
  },
  text: {
    flex: .4,
  },
  highlightText: {
    fontWeight: 'bold',
    color: colors.primary,
  }
});

export default WelcomeScreen;
