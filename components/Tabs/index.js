import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import Tab from './tab';

class Tabs extends Component{
    render() {
        const { selected, onPress } = this.props;
        return (
            <View style={styles.container}>
                <Tab onPress={() => onPress('All')} selected={selected === "All"}>All</Tab>
                <Tab onPress={() => onPress('Friday')} selected={selected === "Friday"}>Friday</Tab>
                <Tab onPress={() => onPress('Saturday')} selected={selected === "Saturday"}>Saturday</Tab>
                <Tab onPress={() => onPress('Sunday')} selected={selected === "Sunday"}>Sunday</Tab>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.accent,
        flexDirection: 'row'
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.accent,
        borderLeftColor: Colors.accent,
        borderRightColor: Colors.accent,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flex: 1,
        height: 32
    }
})

export default Tabs;