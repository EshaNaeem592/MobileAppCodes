import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const users = [
  { id: '1', name: 'User 1' },
  { id: '2', name: 'User 2' },
  { id: '3', name: 'User 3' },
  { id: '4', name: 'User 4' },
  { id: '5', name: 'User 5' },
];

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const openChat = (user) => {
    setSelectedUser(user);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openChat(item)} style={styles.userItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedUser && (
        <View style={styles.chatContainer}>
          <Text style={styles.chatText}>Chat with {selectedUser.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
