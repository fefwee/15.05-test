import { ChatMessagePlace } from "./ChatMesasgePlace/ChatMessagePlace"
import { FormUsers } from "./FormUsers/FormUsers"
import style from './ChatMessageUsers.module.css'

export const ChatMessageUsers:React.FC = () => {
    return (
        <div className={style.wrapper_chat}>
            <ChatMessagePlace/>
            <FormUsers/>
        </div>
    )
}