import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const kk=['dsf','fdgfger','d','fdh','ttrr','f']

const Result = (props) => {
    return (
        <View style={styles.resultWrapper}>
            {props.isOpen ? props.res.map((item,idx)=>(
                <View 
                    key={idx}
                    style={styles.itemWrapper}
                >
                    <Image 
                        style={styles.itemImage}
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                    />
                    <Text style={styles.itemText}>{kk[item]}</Text>
                </View>
                
            )):<Text></Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    resultWrapper: {
        height: 400,
    },
    itemWrapper: {
        margin: 10,
        marginLeft: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },
    itemText: {
        fontSize: 20,
        marginRight: 50,
    },
});

export default Result;

