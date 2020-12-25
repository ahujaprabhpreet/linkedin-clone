import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className = "sidebar__recentItem">
            <span className = "sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <img src = "https://blog.prezi.com/wp-content/uploads/2019/04/03-deep-blue-1024x576.jpg" alt =" " />
                <Avatar className = "sidebar__avatar" src = "https://lh3.googleusercontent.com/bFE5GTxftjZIlgMnxSdIsDAXgQKbc6V9aDcQT1X6NYQoHz-73ZGBA1xYRaNH9Du0QNmQhQ=s85" />
                <h2>Prabhpreet Ahuja</h2>
                <h4>prabhpreetsa@gmail.com</h4>
            </div>

            <div className = "sidebar__stats">
                <div className = "sidebar__stat">
                    <p>Who viewed you</p>
                    <p className = "sidebar__statNumber"> 116 </p>
                </div>

                <div className = "sidebar__stat">
                    <p>Connections</p>
                    <p className = "sidebar__statNumber"> 1180</p>
                </div>

            </div>

            <div className = "sidebar__bottom"> 
                <p>Recent Views</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('jobsearch')}
                {recentItem('hiring')}
                {recentItem('softwaredeveloper')}
            </div>

        </div>
    )
}

export default Sidebar
