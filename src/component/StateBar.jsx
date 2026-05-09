import React from 'react'

const StateBar = (props) => {
    const statisticData = props.statInfo
  return (
    <div className='stateBars'>
        <hr />
        <div className='bars'>
            {statisticData.map((stat) => {
                return (
                    <div className="stat-item" key={stat.label}>
                        <h3>{stat.value}</h3>
                        <p>{stat.label}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
    
  )
}

export default StateBar


