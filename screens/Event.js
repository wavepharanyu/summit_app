import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
//import data from '../mock/data';
import Colors from '../constants/Colors';


const Event = ({ route }) => {

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/profile.png')} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.speaker}>{data.speaker}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <Text style={styles.date}>{data.date} / {data.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    flex: 1
  },
  image:{
    height: 150,
    width: 150,
    marginTop: 8,
  },
  title: {
      fontSize: 18,
      fontWeight: '700',
      marginTop: 32
  },
  speaker:{
      marginTop: 12,
      fontSize: 16,
      fontWeight: '500',
  },
  date: {
    marginTop: 12,
    color: Colors.accent
  },
  description: {
    marginTop: 12
  }
});
export default Event;