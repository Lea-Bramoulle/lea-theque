import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/slices/gameSlice';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function HomeScreen(): JSX.Element {
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.game);

  return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       >
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <Text>cc {value}</Text>
          <Button title="Increment" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </View>
      </ScrollView>
);
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
