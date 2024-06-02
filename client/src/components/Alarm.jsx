import React, { useEffect, useState } from 'react'
import './compStyles/Alarms.css'
import AlarmForm from './AlarmForm';
import AlarmList from './AlarmList';

const Alarm = () => {
  let clock
  let h
  let m
  const [alarms, setAlarms] = useState([]);
  const [id, setId] = useState(0)
  const [alarm, setAlarm] = useState({
    id: id,
    time:''
  })
  const add = (alarm) => {
    setAlarms([...alarms, alarm])
  }
  const submitAlarm = (e) => {
		e.preventDefault()
		add(alarm)
		setAlarm({
      id:id,
      time:''
    })
	}
  const remove = (alarm) => {
    setAlarms(alarms.filter(a => a.id !== alarm.id))
  }
  useEffect((id)=>{setId(id + 1)},[alarms])
  const checkAlarms = () => {
    console.log('hey')
    clock = new Date(Date.now())
    h = clock.getHours()
    if (h<10) {h=`0${h}`}
    m = clock.getMinutes()
    if (m<10) {m=`0${m}`}
    alarms.map(alarm => {
      if(alarm.time.toString() === (h+':'+m)) {
        alert('it is')
      }
      return 0
    })
  }
  if (alarms.length) {
    setInterval(checkAlarms, 40000)
  }
  
  return (
    <div className='alarms-main'>
      <AlarmForm add={add} submitAlarm={submitAlarm} alarm ={alarm} setAlarm={setAlarm}/>
			<AlarmList alarms={alarms} remove={remove}/>
    </div>
  )
}

export default Alarm
