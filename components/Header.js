import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.titleText}>Header</Text>
            <Text style={styles.slogan}>Slogan</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerWrapper:{
        height: 80,
        backgroundColor: '#de9168',
        alignItems: 'center',
    },
    titleText:{
        color: '#fff',
        fontSize: 25,
    },
    slogan:{
        color: '#000',
        fontSize: 15,
    },
});

export default Header;
