/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Video from 'react-native-video';
import Lottie from 'lottie-react-native';

import LottieLogo from './LottieLogo1.json';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Video interop doesn't work:</Text>
          <Video
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            style={styles.video}
            onProgress={(e: {
              currentPlaybackTime: number;
              currentTime: number;
              playableDuration: number;
              seekableDuration: number;
            }) => {
              console.log('Video.onProgress event received', e);
            }}
            onEnd={() => {
              console.log('Video.onEnd event received');
            }}
            controls
            resizeMode="contain"
          />
          <Text>Lottie doesn't animate:</Text>
          <Lottie
            style={styles.lottieSample}
            source={LottieLogo}
            autoPlay
            loop
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 202,
  },
  lottieSample: {
    marginTop: 8,
    marginBottom: 8,
    // width: 300,
    height: 200,
  },
});

export default App;
