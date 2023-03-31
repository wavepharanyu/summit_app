import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const coordinate = {
  latitude: 13.720338,
  longitude: 100.501769,
  latitudeDelta: 0.0122,
  longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * 0.0122
}

const Map = () => {
  return ( 
    <MapView style={styles.map}
    initialRegion={coordinate}
    >
      <Marker
      coordinate={coordinate}
      title={'the summit'}
    />
  </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }
});
export default Map;