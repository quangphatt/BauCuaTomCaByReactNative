import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import SplashScreen from  "react-native-splash-screen";

const App = () => {
	React.useEffect(() => {
		SplashScreen.hide();
	});

	return (
		<View>
			<Header />
			<Body />
		</View>
	);
};

export default App;