import { useState, useEffect } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
export const Registry = () => {
  const [today, setToday] = useState<string>('00/00/0000')
  const [time, setTime] = useState<string>('00:00')
  const [pressure] = useState<{sys:string, dia:string}>({sys:'120', dia:'80'})

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
        <TextInput placeholder="SYS" value={pressure.sys}></TextInput>
        <Text>DIA</Text>
        <TextInput placeholder="DIA" value={pressure.dia}></TextInput>
      </View>
      <Button title="Register"></Button>
    </>
  )
}