import React, {useRef, useState} from 'react';
import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import slide from './slide';
import OnboardingItem from './OnboardingItem';
import Currentpagenavigation from './currentpagenavigation';
function Onboarding() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={slide}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          
        />
      </View>
      <Currentpagenavigation data={slide} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor:"#fff"
  },
});
export default Onboarding;
