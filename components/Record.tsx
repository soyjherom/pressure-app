import { useCallback, useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { styles } from '../assets/styles/GeneralStyles'
import { Pressure } from '../types/Pressure'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Record = () => {

  const [today, setToday] = useState<string>('00/00/0000')
  const [time, setTime] = useState<string>('00:00')
  const [sys, setSys] = useState<number>(120)
  const [dia, setDia] = useState<number>(80)
  const [pressure, setPressure] = useState<Pressure>({
    date: today,
    time: time,
    syst: sys,
    dias: dia
  })

  useEffect(()=>{
    const now = new Date();
    const day: string = String(now.getDate()).padStart(2, '0')
    const month: string = String(now.getMonth() + 1).padStart(2, '0')
    const year: string = String(now.getFullYear())
    setToday(`${month}/${day}/${year}`)
  },[])

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

  useEffect(()=>{
    console.log(pressure)

    const save = async(p:Pressure) => {
      try{
        await AsyncStorage.setItem('@pressure_data', JSON.stringify(p))
      }catch(e){console.error(e)}
    }

    const read = async() => {
      try{
        const value = await AsyncStorage.getItem('@pressure_data')
        if(value){
          console.log(`Stored data: ${value}`)
        }
      }catch(e){console.error(e)}
    }

    save(pressure)
    read()
  },[pressure])

  const handleSys = useCallback((value: number) => setSys(value),[setSys])

  const handleDia = useCallback((value: number) => setDia(value),[setDia])

  const handlePress = useCallback(() => {
    setPressure({
      date: today,
      time: time,
      syst: sys,
      dias: dia
    })
  },[today, time, dia, sys, pressure, setPressure])

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