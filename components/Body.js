import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Result from './Result';
import Control from './Control';

const Body = () => {
    const [itemList, setItemList]=useState([0,0,0])
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
            <Result 
                res={itemList}
                isOpen={isOpen}
            />
            <Control 
                isOpen={isOpen}
                handlePlay={handlePlay}
                handleOpen={handleOpen}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bodyWrapper: {

    },
});

export default Body;

