import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

const Control = (props) => {
    return (
        <View style={styles.controlArea}>
            <Button
                    style={styles.buttonPlay}
                    onPress={props.handlePlay}
                >
                    PLAY
                </Button>
                <Button
                    style={props.isOpen ? styles.buttonClose : styles.buttonOpen}
                    onPress={props.handleOpen}
                >
                    {props.isOpen ? 'CLOSE' : 'OPEN'}
                </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    controlArea: {
        backgroundColor: '#abb8cf',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonPlay: {
        color: 'white',
        backgroundColor: 'blue',
        margin: 10,
        padding: 12,
        width: 150,
        borderRadius: 20,
    },
    buttonOpen: {
        color: 'white',
        backgroundColor: 'green',
        margin: 10,
        padding: 12,
        width: 150,
        borderRadius: 20,
    },
    buttonClose: {
        color: 'white',
        backgroundColor: 'red',
        margin: 10,
        padding: 12,
        width: 150,
        borderRadius: 20,
    },
});

export default Control;
