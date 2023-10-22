import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the image from the assets folder
import StoryImage from './assets/ShortStories.jpg';
import CollectionScreen from './CollectionScreen'; // Import the CollectionScreen

// Import your category screens
import MoralShortStoriesScreen from './MoralShortStoriesScreen';
import HorrorShortStoriesScreen from './HorrorShortStoriesScreen';
import InspirationalShortStoriesScreen from './InspirationalShortStoriesScreen';
import MotivationalShortStoriesScreen from './MotivationalShortStoriesScreen';
import FunnyShortStoriesScreen from './FunnyShortStoriesScreen';

const Stack = createStackNavigator(); // Create a stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Collection" component={CollectionScreen} />
        {/* Add screens for other categories here */}
        <Stack.Screen name="MoralShortStories" component={MoralShortStoriesScreen} />
        <Stack.Screen name="HorrorShortStories" component={HorrorShortStoriesScreen} />
        <Stack.Screen name="InspirationalShortStories" component={InspirationalShortStoriesScreen} />
        <Stack.Screen name="MotivationalShortStories" component={MotivationalShortStoriesScreen} />
        <Stack.Screen name="FunnyShortStories" component={FunnyShortStoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleCollectionPress = () => {
    // Navigate to the Collection screen when the button is pressed
    navigation.navigate('Collection');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={StoryImage} style={styles.image}>
        <TouchableOpacity style={styles.button} onPress={handleCollectionPress}>
          <Text style={styles.buttonText}> Collection</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '140%',
    height: '110%',
    marginRight: 200,
  },
  


    button: {
      padding: 10,
      borderRadius: 5,
     
    },
    buttonText: {
      color: 'white',
      fontSize: 31,
      fontWeight: 'bold',
      backgroundColor: 'grey',
      margin: 105,
      top: '80%',
  
    marginRight:240,
    left:170
    
    },
  });
  


