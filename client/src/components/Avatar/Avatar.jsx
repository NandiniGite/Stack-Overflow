import React from 'react'

const Avatar = ({children,backgroundColor, px,py,color,borderRadius,fontSize,textAlign, cursor}) => {
  const style={
    backgroundColor,
    padding : `${py} ${px}`,
    color: color|| 'black',
    borderRadius,
    fontSize,
    textAlign: "center",
    curson: cursor|| null,
    textdecoration:"none",
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar