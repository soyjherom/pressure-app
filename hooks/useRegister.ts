import { Pressure } from '../types/Pressure'
import RNFetchBlob from 'react-native-fetch-blob'
import { useEffect } from 'react'

export const useRegister = (pressure: Pressure) => {
  
  useEffect(()=>{
    const { date, time, syst, dias } = pressure
    const headerString = 'date, time, sys, dia\n'
    const rowString = `${date},${time},${syst},${dias}\n`
    const csvString = `${headerString}${rowString}`
    console.log(RNFetchBlob.fs.dirs.DownloadDir)
    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`

    console.log(`Path to write: ${pathToWrite}`)
  
    RNFetchBlob.fs.writeFile(pathToWrite,csvString,'utf8')
    .then(()=>{
      console.log(`Wrote file ${pathToWrite}`)
    })
    .catch((error: any)=>
      console.error(error)
    )
  },[pressure])

}