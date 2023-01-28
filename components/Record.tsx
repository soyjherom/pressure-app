import { useCallback, useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { styles } from '../assets/styles/GeneralStyles'

// TODO: CREATE A HOOK TO STORAGE THE PRESSURES ON A CSV FILE TO FEED THE DASHBOARD

export const Record = () => {
  const [today, setToday] = useState<string>('00/00/0000')
  const [time, setTime] = useState<string>('00:00')
  const [sys, setSys] = useState<number>(120)
  const [dia, setDia] = useState<number>(80)

  useEffect(()=>{
    const now = new Date();
    const day: string = String(now.getDate()).padStart(2, '0')
    const month: string = String(now.getMonth() + 1).padStart(2, '0')
    const year: string = String(now.getFullYear())
    setToday(`${month}/${day}/${year}`)
  },[setToday])

  useEffect(()=>{
    let secTimer = setInterval(()=>{
      const now = new Date();
      const hour: string = String(now.getHours())
      const minutes: string = String(now.getMinutes()).padStart(2, '0')
      const seconds: string = String(now.getSeconds()).padStart(2, '0')
      setTime(`at ${hour}:${minutes}:${seconds}`)
    },1000)
    return ()=>clearInterval(secTimer)
  },[])

  const handlePress = useCallback(() => console.log(`Sys: ${sys} Dia: ${dia}`),[sys, dia])

  const handleSys = useCallback((value: number) => setSys(value),[setSys])

  const handleDia = useCallback((value: number) => setDia(value),[setDia])

  return(
    <>
      <View style={styles.columnarCenteredContainer}>
        <Text style={styles.header}>Date: {today}</Text>
        <Text style={styles.header}>Time: {time} </Text>
        <View style={styles.columnarCenteredContainer}>
          <Text style={styles.header}>SYS</Text>
          <NumericInput 
            value={sys} 
            onChange={handleSys}
            totalWidth={240}
          />
          <Text style={styles.header}>DIA</Text>
          <NumericInput 
            value={dia} 
            onChange={handleDia}
            totalWidth={240}
          />
        </View>
        <Button title="Register" onPress={handlePress}></Button>
      </View>
    </>
  )
}