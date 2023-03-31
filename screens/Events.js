import { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from '../components/Card';
import data from '../mock/data';
import Tabs from '../components/Tabs';

class Events extends Component {
  state={
    selected: 'All'
  }

  onPress = (selected) => {
      this.setState({ selected })
  }

  render() {
    const { selected } = this.state
    return (
      <View style={styles.wrap}>
        <Tabs selected={selected} onPress={this.onPress}/>
        <FlatList 
          data={data.filter(d => d.date === selected || selected === "All")}
          renderItem={({ item }) => <Card data={item} navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    alignSelf: 'stretch'
  }
});
export default Events;