import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.titleText}>Bầu Cua Tôm Cá</Text>
            <Text style={styles.slogan}>"Thắng bại tại hên xui"</Text>
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
        margin: 10,
    },
});

export default Header;
