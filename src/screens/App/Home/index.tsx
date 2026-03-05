import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { appIcons } from '../../../shared/assets';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.backGroundColor}>
      <View>
        <TouchableOpacity style={styles.loactionStyle}>
          <Image
            source={appIcons.locationIcon}
            style={styles.locationIconStyle}
          />
          <Text style={styles.locationTextStyle}>Location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heartStyle}>
        <TouchableOpacity>
          <Image style={styles.heartIconStyle} source={appIcons.heartIcon} />
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
          <Animated.View
            style={[styles.textBoxStyle, { transform: [{ scale: scaleAnim }] }]}
          >
            <Image
              source={appIcons.searchIcon}
              style={styles.searchIconStyle}
            />
            <TextInput
              placeholder="Search..."
              editable={false}
              pointerEvents="none"
              style={{ flex: 1 }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  backGroundColor: {
    backgroundColor: '#dc3187',
    flex: 1,
  },

  loactionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  locationIconStyle: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  locationTextStyle: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  heartStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    marginTop: -45,
  },
  heartIconStyle: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  textBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 22,
  },
  searchIconStyle: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
