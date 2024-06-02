import React from 'react'
import './compStyles/TaskForm.css'

const TaskForm = (props) => {
	/*<input 
			type="submit"
			id="task-submit"
			value='Set&#10;task' 
			onSubmit={submitTask}
			onClick={(e) => e.preventDefault()}
		/>*/
  return (
    <form className='task-form'>
        <input 
			type="text"
			id = "task-input"
			placeholder="Set new task"
			value={props.task.task} 
			onChange={e => props.setTask({
				...props.task,
				task:e.target.value
			})}
        />
		<button 
			id="task-submit"
			onClick={props.submitTask}
		>
			Set task
		</button>
    </form>
  )
}

export default TaskForm
