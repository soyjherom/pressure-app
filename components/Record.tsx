import { useCallback, useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import NumericInput from 'react-native-numeric-input'

export const Registry = () => {
  const [today, setToday] = useState<string>('00/00/0000')
  const [time, setTime] = useState<string>('00:00')
  const [sys, setSys] = useState<number>(120)
  const [dia, setDia] = useState<number>(80)

  useEffect(()=>{
    const now = new Date();
    const day: string = String(now.getDate()).padStart(2, '0')
    const month: string = String(now.getMonth() + 1).padStart(2, '0')
    const year: string = String(now.getFullYear())
    const hour: string = String(now.getHours())
    const minutes: string = String(now.getMinutes()).padStart(2, '0')
    setToday(`${month}/${day}/${year}`)
    setTime(`${hour}:${minutes}`)
  },[setToday, setTime])

  const handlePress = useCallback(() => console.log(`Sys: ${sys} Dia: ${dia}`),[sys, dia])

  const handleSys = useCallback((value: number) => setSys(value),[setSys])

  const handleDia = useCallback((value: number) => setDia(value),[setDia])

  return(
    <>
      <View style={styles.columnarCenteredContainer}>
        <Text style={styles.header}>Time: {today} at {time} </Text>
        <View style={styles.columnarCenteredContainer}>
          <Text>SYS</Text>
          <NumericInput value={sys} onChange={handleSys}/>
          <Text>DIA</Text>
          <NumericInput value={dia} onChange={handleDia}/>
        </View>
        <Button title="Register" onPress={handlePress}></Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  columnarCenteredContainer: {
    marginTop: 20,
    margin: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 28
  }
})