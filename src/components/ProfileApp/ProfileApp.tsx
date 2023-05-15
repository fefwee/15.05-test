import React from "react";
import style from './ProfileApp.module.css'



export const ProfileApp:React.FC = () => {

    return(

        <div className={style.profile_header}>
          
            <div><button className={style.btn}>
                Sign In
                </button></div>
        </div>
    )
}