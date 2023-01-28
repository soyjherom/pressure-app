import { View } from 'react-native';

import { AverageDaily } from '../components/AverageDaily'
import { AverageMontly } from '../components/AverageMontly'
import { AverageWeekly } from '../components/AverageWeekly' 

import { styles } from '../assets/styles/GeneralStyles'

export default function DashboardScreen() {
  return (
    <View style={styles.columnarCenteredContainer}>
      <AverageDaily/>
      <AverageWeekly/>
      <AverageMontly/>
    </View>
  );
}
