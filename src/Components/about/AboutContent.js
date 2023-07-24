import React from 'react'
import './AboutContent_style.css'

const AboutContent = ({props})=>{
    return (
        <div className={"about_Content_wrapper"}>
            <div className={"about_content"}>
                {props.map}
            </div>
        </div>
    )
}
export default AboutContent