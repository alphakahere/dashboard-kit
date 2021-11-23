import React from 'react'

import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'

const PersoCircularProgressBar = ({percentage, strokeWidth, background, pathColor, textColor, trailColor, backgroundColor}) => {

    return (
        <CircularProgressbar 
        value={percentage} text={`${percentage}%`}
        strokeWidth={strokeWidth}
        background={background}
        styles={buildStyles({
            pathColor: `${pathColor}`,
            textColor: `${textColor}`,
            trailColor: `${trailColor}`,
            backgroundColor: `${backgroundColor}`,
        })}
        />
    )
}

export default PersoCircularProgressBar
