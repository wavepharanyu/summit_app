import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';

class Card extends Component{
    toEvent = () => {
        this.props.navigation.navigate('Event', {data: this.props.data})
    }
    render() {
        const { data } = this.props
        return (
            <TouchableWithoutFeedback onPress={this.toEvent}> 
                <View style={styles.wrap}>
                    <Image style={styles.image} source={require('../../assets/profile.png')} />
                    <View style={styles.detail}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.speaker}>{data.speaker}</Text>
                        <Text style={styles.date}>{data.date} / {data.time}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        alignSelf: 'stretch',
        height: 200,
        padding: 10,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: 'center'
    },
    image:{
        height: 150,
        width: 150,
        marginRight: 10
    },
    detail: {
        flex: 1,
        marginTop: 10

    },  
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    speaker:{
        marginTop: 4,
        flex: 1
    },
    date: {
        color: Colors.accent
    }
})

export default Card;