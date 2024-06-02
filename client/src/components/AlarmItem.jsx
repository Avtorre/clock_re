import React, { useState } from 'react'

const AlarmItem = ({alarm, remove}) => {
  const [t, setT] = useState({
    id: alarm.id,
    time: alarm.time
  })
  const [editMode, setEditMode] = useState(false)
  const edit = () => {
    if (document.getElementById(`alarm${alarm.id}`).readOnly === true) {
      document.getElementById(`alarm${alarm.id}`).readOnly=false
      setEditMode(true)
    } 
    else {
      document.getElementById(`alarm${alarm.id}`).readOnly=true
      setEditMode(false)
    }
  }
    return (
        <div className="task">
          <div className="content">
              <input
              id={`alarm${alarm.id}`} 
              type="time"
              className='text'
              value={t.time}
              onChange={e => setT({...t, time:e.target.value})}
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
              <button className="delete" onClick={() => remove(alarm)}>Delete</button>
          </div>
        </div>
      )
}

export default AlarmItem
