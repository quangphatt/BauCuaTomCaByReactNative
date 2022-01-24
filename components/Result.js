import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = (props) => {
    return (
        <View>
            {props.res.map((item,idx)=>(
                <Text key={idx}>{item}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Result;

