import style from './FormUsers.module.css'


export const FormUsers:React.FC = () => {
    return (
        <div className={style.chat_bg}>
            <form className={style.form}>
            <input type="text" placeholder='message..' />
            <button>send</button>
            </form>
           
        
        </div>
    )
}