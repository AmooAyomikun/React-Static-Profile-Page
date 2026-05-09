import React from 'react'

const SkillsList = (props) => {
    const skillList = props.skills
  return (
    <div className='skill-section'>
        <h2>SKILLS</h2>
        <div className='skillList'>
            {skillList.map((skill) => {
                return (
                    <span className='skills' key={skill}>{skill}</span>
                )
            })}
        </div>
    </div>
    
  )
}

export default SkillsList