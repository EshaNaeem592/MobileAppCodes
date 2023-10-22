import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
     
    <View style={{flex:0.30, backgroundColor:'red'}}>
      <Text style={{marginTop:100,color:'white',fontSize:50}}>
        Login Screen
      </Text>

    </View>
    <View style ={{flex:0.40, backgroundColor:'green',justifyContent:'center', alinItems:'center'}}>
      
      
      </View>
      <View style ={{flex:0.30, backgroundColor:'yellow'}}>
      
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
