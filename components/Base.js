import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Base extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Events</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Base;