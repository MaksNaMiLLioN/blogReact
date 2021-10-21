import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import axios from 'axios'
import {useLocation} from 'react-router'

const Home = () => {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()


    useEffect(() => {
        const fetchPosts = async () => {
          await axios.get("/posts" + search).then(res => {
            setPosts(res.data)}
          )
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }

        })
      }
        fetchPosts();
       
      }, [search]);



    return (

        <>
        <Header />
        <div className="home">
            <Posts posts = {posts} />
            <Sidebar />
        </div>
        </>
    )
}

export default Home
