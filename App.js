import { View, SafeAreaView, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { posts } from './posts'

import {Post} from './Post'

export default function App() {

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#F56040" />
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/instagram.jpg')}
      
        />
        <MaterialCommunityIcons name='chat-outline' size={30} color="#CCC" />
      </View>

      <ScrollView>
        {
          posts.map((post) => (
            <Post post={post}></Post>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  logo: {
    width: 40,
    height: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1
  }
})