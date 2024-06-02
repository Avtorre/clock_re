import React from 'react'
import './compStyles/TaskForm.css'

const AlarmForm = (props) => {
    
  return (
    <form className='task-form'>
        <input 
			type="time"
			id = "task-input"
			placeholder="Set new task"
			value={props.alarm.time} 
			onChange={e => props.setAlarm({...props.alarm,
			time : e.target.value}) }
        />
		
		<button 
			id="task-submit"
			onClick={props.submitAlarm}
		>
			Set alarm
		</button>
    </form>
  )
}

export default AlarmForm
