import React from 'react'

import classes from "./TimerImg.module.css"

const TimerImg = ({timer}) => {
  return (
    <div className={classes.img}>
    <div
      className={classes.wrapper_img}
      style={{marginLeft: -(timer.minutes * 60 + timer.seconds)}}>
      <img src={require("./icon/scale.png")} alt={1}></img>
    </div>
  </div>
  )
}

export default TimerImg