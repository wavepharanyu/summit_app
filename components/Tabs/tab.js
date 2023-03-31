import { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../constants/Colors';

class Tab extends Component{
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} style={styles.touchable}>
                <View style={[styles.tab, this.props.selected && styles.selected]}>
                    <Text style={[this.props.selected && styles.selected]}>{this.props.children}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    touchable: {
        flex: 1
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
    },
    selected: {
        backgroundColor: Colors.accent,
        color: '#fff',
    }
})

export default Tab;