import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {img0, img1, img2, img3, img4, img5} from '../assets/images'

const images=[img0, img1, img2, img3, img4, img5];

const Result = (props) => {
    return (
        <View style={styles.resultWrapper}>
            {props.isOpen ? (
                <View
                    style={styles.itemWrapper}
                >
                    <View
                        style={styles.itemFirstLine}
                    >
                        <Image 
                            style={styles.itemImage}
                            source={images[props.res[0]]}
                        />
                        <Image 
                            style={styles.itemImage}
                            source={images[props.res[1]]}
                        />
                    </View>
                    <View
                        style={styles.itemSecondLine}
                    >
                        <Image 
                            style={styles.itemImage}
                            source={images[props.res[2]]}
                        />
                    </View>
                </View>
                
            ):<Text></Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    resultWrapper: {
        height: 400,
    },
    itemWrapper: {
        
    },
    itemFirstLine: {
        marginTop: 50,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    itemSecondLine: {
        alignItems: 'center',
    },
    itemImage: {
        height: 120,
        width: 120,
        borderRadius: 20,
    },
    itemText: {
        fontSize: 20,
        marginRight: 50,
    },
});

export default Result;

