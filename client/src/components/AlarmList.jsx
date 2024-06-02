import React from 'react'
import AlarmItem from './AlarmItem'
import './compStyles/TaskList.css'

const AlarmList = ({alarms, remove}) => {
  if (!alarms.length) {
      return(
        <h3 className='no-tasks'>No Alarms</h3>
      )
    }
    return (
      <div id='tasks'>
        <h1 className='tasks-header'>
          Alarms
        </h1>
        {alarms.map(alarm =>
          <AlarmItem key={alarm.id} alarm={alarm} remove={remove}/>
        )}
      </div>
    )
}

export default AlarmList
