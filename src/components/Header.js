// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { headerText: props.headerText }
    }

    render() {
        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.state.headerText}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: 'rgb(93,107,115)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: 'white',
        elevation: 3
    }
};