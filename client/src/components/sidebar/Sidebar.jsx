import React, {useState, useEffect} from 'react'
import './sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(()=>{
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Nesciunt earum officiis nisi veniam. 
                    Ipsa.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(cat => (
                    <Link to={`/?cat=${cat.name}`} className="link">
                        <li className="sidebarListItem">{cat.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
