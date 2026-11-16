import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

function Micheal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Micheal!</Text>
      <Text>RN Assignment 01</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

registerRootComponent(Micheal);