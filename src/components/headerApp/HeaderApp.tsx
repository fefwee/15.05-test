import { ProfileApp } from "../ProfileApp/ProfileApp";
import { NewChat } from "../NewChat/NewChat";
import style from './HeaderApp.module.css'
import { Logo } from "../Logo/Logo";

export const HeaderApp:React.FC = () =>{
    return (
        <div className={style.header}>
            <Logo/>
            <NewChat/>
            <ProfileApp/>
        </div>
    )
}