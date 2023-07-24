import React from 'react'
import './subTitle_style.css'

const SubTitle = ({props})=>{
    return (
        <div className={"subTitle_wrapper"}>
            <div className={"sub_content"}>
                {props}
            </div>
        </div>
    )
}
export default SubTitle