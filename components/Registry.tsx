import { useCallback, useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import NumericInput from 'react-native-numeric-input'
export const Registry = () => {
  const [today, setToday] = useState<string>('00/00/0000')
  const [time, setTime] = useState<string>('00:00')
  const [pressure, setPressure] = useState<{sys:number, dia:number}>({sys:120, dia:80})

  const handleSys = useCallback((value: number) => {
    setPressure(pression =>{
      return{
        ...pressure,
        sys: value
    }})
    console.log(pressure)
  },[])

  const handleDia = useCallback((value: number) => {
    setPressure(pression =>{
      return {
        ...pressure,
        dia: value
    }})
    console.log(pressure)
  },[])

  useEffect(()=>{
    const now = new Date();
    const day: string = String(now.getDate()).padStart(2, '0')
    const month: string = String(now.getMonth() + 1).padStart(2, '0')
    const year: string = String(now.getFullYear())
    const hour: string = String(now.getHours())
    const minutes: string = String(now.getMinutes())
    setToday(`${month}/${day}/${year}`)
    setTime(`${hour}:${minutes}`)
  },[])

  return(
    <>
      <View>
        <Text>Time: {today} at {time} </Text>
        <Text>SYS</Text>
        <NumericInput value={pressure.sys} onChange={handleSys}/>
        <Text>DIA</Text>
        <NumericInput value={pressure.dia} onChange={handleDia}/>
      </View>
      <Button title="Register"></Button>
    </>
  )
}