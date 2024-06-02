import React from 'react'
import './compStyles/TaskList.css'
import TaskItem from './TaskItem'

const TaskList = ({tasks, remove}) => {
  if (!tasks.length) {
    return(
      <h3 className='no-tasks'>No tasks</h3>
    )
  }
  return (
    <div id='tasks'>
      <h1 className='tasks-header'>
        Tasks
      </h1>
      {tasks.map(task =>
        <TaskItem key={task.id} task={task} remove={remove}/>
      )}
    </div>
  )
}

export default TaskList
