import React,{useState} from "react";
import style from './ProfileApp.module.css'
import closed from './cancel.png'



export const ProfileApp: React.FC = () => {

const [isOpen,setIsOpen] = useState(false)

const toggleOpen = ()=>{
    setIsOpen(!isOpen)
}

    return (

        <div className={style.profile_header}>

            <div><button className={style.btn}
            onClick={()=>setIsOpen(true)}
            >
                Sign in
            </button>
            
            {isOpen && (
                <div className={style.modal}>
                <div>
                    <form className={style.modal_window} >
                        <h1>Вход</h1>
                        <input type="text" placeholder='Введите логин' />
                        <input type="text" placeholder='Введите пароль' />
                        <button>Войти</button>
                        <div className={style.exit_Btn} onClick={()=>toggleOpen()}><img src={closed}/></div>
                    </form>
                </div>
    
            </div>
            )}
            </div>
        </div>
    )
}