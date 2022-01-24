import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';

import Result from './Result';

const Body = () => {
    const [itemList, setItemList]=useState([])
    const [isOpen, setIsOpen]=useState(false);

    const handlePlay=()=>{
        let items=[];
        for(let i=0;i<3;i++){
            let item=Math.floor(Math.random() * 6);
            items.push(item);
        }
        setItemList(items);
    };

    const handleOpen=()=>{
        setIsOpen((prev)=>!prev)
    };

    return (
        <View style={styles.bodyWrapper}>
            <Result res={itemList}/>
            <View style={styles.controlArea}>
                <Button
                    style={styles.buttonPlay}
                    onPress={handlePlay}
                >
                    PLAY
                </Button>
                <Button
                    style={isOpen ? styles.buttonOpen : styles.buttonClose}
                    onPress={handleOpen}
                >
                    {isOpen ? 'OPEN' : 'CLOSE'}
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bodyWrapper: {

    },
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

export default Body;

