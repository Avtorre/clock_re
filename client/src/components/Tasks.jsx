import React, { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import './compStyles/Tasks.css'

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0)
	const [task, setTask] = useState({
		id:id,
		task:''
	})
  const add = (task) => {
    setTasks([...tasks, task])
  }
  const remove = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
    console.log(task)
  }
  const submitTask = (e) => {
		e.preventDefault()
		console.log(task)
		console.log(task.task)
		add(task)
		setTask({
			id:id,
			task:''
		})
	}
  // eslint-disable-next-line
  useEffect(()=>{setId(id + 1)},[tasks])
  return (
    <div className='tasks-main'>
      <TaskForm add={add} submitTask={submitTask} task={task} setTask={setTask}/>
			<TaskList tasks={tasks} remove={remove}/>
    </div>
  )
}

export default Tasks
