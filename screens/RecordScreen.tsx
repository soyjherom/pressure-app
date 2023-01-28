import { StyleSheet, View } from 'react-native';

import { RootTabScreenProps } from '../types';

import { Record } from '../components/Record'

export default function RecordScreen({ navigation }: RootTabScreenProps<'RecordScreen'>) {
  return (
    <View style={styles.container}>
      <Record/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
