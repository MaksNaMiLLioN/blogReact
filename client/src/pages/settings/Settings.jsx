import React from 'react'
import './settings.css'
import SideBar from '../../components/sidebar/Sidebar'

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://images.pexels.com/photos/6785291/pexels-photo-6785291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Nuraly" />
                    <label>Email</label>
                    <input type="email" placeholder="nuraly@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Settings
