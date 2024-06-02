import React from 'react'

const PostItem = (props) => {
  return (
    <div className='post'>
        <div className='post-content'>
            <h4 className='post-header'>{props.id}. {props.title}</h4>
            <div>
                {props.body}
            </div>
        </div>
    </div>
  )
}

export default PostItem
