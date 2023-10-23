import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const HomeScreen = () => {
        const navigation = useNavigation();
      
        const goToDetails = () => {
          navigation.navigate('DetailedScreen');
        }
      
    }
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      {/* Add your signup form components here */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
