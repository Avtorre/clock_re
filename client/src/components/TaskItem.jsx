import React, { useState } from 'react'

const TaskItem = ({task, remove}) => {
  const [t, setT] = useState({
    id: task.id,
    task: task.task
  })
  const [editMode, setEditMode] = useState(false)
  const edit = () => {
    if (document.getElementById(`task${task.id}`).readOnly === true) {
      document.getElementById(`task${task.id}`).readOnly=false
      setEditMode(true)
    } 
    else {
      document.getElementById(`task${task.id}`).readOnly=true
      setEditMode(false)
  }

}
  return (
    <div className="task">
      <div className="content">
          <input
          id={`task${task.id}`}
          type="text"
          className={(!editMode) ? `text`: `editing`}
          value={t.task}
          onChange={e => setT({...t, task:e.target.value})}
          readOnly
          />
      </div>
      <div className="actions">
          <button className="edit" onClick={edit}>
            {(!editMode) 
              ? `Edit`
              : `Save`
            }
          </button>
          <button className="delete" onClick={() => remove(task)}>Delete</button>
      </div>
    </div>
  )
}

export default TaskItem
