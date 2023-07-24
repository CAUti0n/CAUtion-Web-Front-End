import React from 'react'
import './title_style.css'

const Title = ({props})=>{
    return (
    <div >
        <p className={"content"}>
            {props}
        </p>
    </div>
    )
}
export default Title