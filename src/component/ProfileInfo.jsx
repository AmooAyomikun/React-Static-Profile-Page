import React from 'react'

const ProfileInfo = (props) => {
  return (
    <div className='profile-info'>
        <h1>{props.name}</h1>
        <p className='handle'>{props.handle} . {props.location}</p>
        <p className='bio'>{props.bio}</p>
    </div>
  )
}

export default ProfileInfo