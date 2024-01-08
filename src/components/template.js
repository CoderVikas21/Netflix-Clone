import React from 'react'

const Template = ({data}) => {
    let title = data.title;
    let desc = data.description;
    let img = data.img;
  return (
    <>
      <div className="content" style={
        (data.id%2==0) ? ({
            flexDirection:'row-reverse'
        }):({
            flexDirection:'row'
        })
      }>
        <div className="left">
            <h1>{title}</h1>
            <h4>{desc}</h4>
        </div>
        <div className="right">
            <img src= {img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Template
