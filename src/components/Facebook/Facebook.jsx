import React from 'react'
import style from './Facebook.module.css'
const Facebook = ({username,userdesc}) => {
  return (
    
    <>
    <div className={style.container}>

        <div className={style.userinfo}>
            <div className={style.userleft}>
                <div className={style.image}>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="" />
                </div>
                <div className={style.username}>
                    <h4>{username} <br/>
                   
                   <span className={style.time}>15 min</span> 
                    </h4>
                   
                </div>
            </div>

            <div className="userright">
                <p className={style.dot}>...</p>
            </div>

        </div>

        <div className={style.userdescription}>
            <p>{userdesc}</p>
        </div>


        <div className={style.postimage}>
            <img src="https://photosfile.com/wp-content/uploads/2022/07/Single-Boy-DP-1.jpeg" alt="" />
        </div>

<div className={style.postlike}>
    <div>like</div>
    <div>comment</div>
    <div>share</div>
</div>



    </div>
    
    </>
  )
}

export default Facebook