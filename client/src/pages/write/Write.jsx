import React from 'react'
import './write.css'

const Write = () => {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://images.pexels.com/photos/9226521/pexels-photo-9226521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            lt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeFormIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id= "fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story" type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
