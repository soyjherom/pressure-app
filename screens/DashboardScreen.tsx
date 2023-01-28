import { StyleSheet, View } from 'react-native';

import { AverageDaily } from '../components/AverageDaily'
import { AverageMontly } from '../components/AverageMontly'
import { AverageWeekly } from '../components/AverageWeekly' 

export default function DashboardScreen() {
  return (
    <View>
      <AverageDaily/>
      <AverageWeekly/>
      <AverageMontly/>
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
