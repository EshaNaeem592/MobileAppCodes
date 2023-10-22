import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

import MoralStoryImage from './assets/MoralStory.jpg';
import HorrorStoryImage from './assets/HorrorStory.jpg';
import InspirationalStoryImage from './assets/InspirationalStory.jpg';
import MotivationalStoryImage from './assets/MotivationalStory.jpg';
import FunnyStoryImage from './assets/FunnyStory.jpg';

const imageMapping = {
  'Moral Short Stories': MoralStoryImage,
  'Horror Short Stories': HorrorStoryImage,
  'Inspirational Short Stories': InspirationalStoryImage,
  'Motivational Short Stories': MotivationalStoryImage,
  'Funny Short Stories': FunnyStoryImage,
};

const data = [
  { id: '1', name: 'Moral Short Stories', screenName: 'MoralShortStories' },
  { id: '2', name: 'Horror Short Stories', screenName: 'HorrorShortStories' },
  { id: '3', name: 'Inspirational Short Stories', screenName: 'InspirationalShortStories' },
  { id: '4', name: 'Motivational Short Stories', screenName: 'MotivationalShortStories' },
  { id: '5', name: 'Funny Short Stories', screenName: 'FunnyShortStories' },
];

const CollectionScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleItemPress = (screenName) => {
    // Navigate to the corresponding screen
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleItemPress(item.screenName)} // Navigate to the selected screen
            style={styles.item}
          >
            {/* Display the image */}
            <Image
              source={imageMapping[item.name]}
              style={styles.image}
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 19,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    marginLeft: -40,
  },
  image: {
    width: 150,
    height: 62,
    marginRight: -5,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 18,
  },
});

export default CollectionScreen;
