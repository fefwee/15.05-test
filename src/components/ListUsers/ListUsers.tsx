import { ListUsersItems } from "./ListUsersItems/ListUsersItems"
import style from './ListUsers.module.css'


export const ListUsers:React.FC = () => {
    return (
        <div className={style.wrapper_users}>
            <ul>
                <ListUsersItems/>
            </ul>
        </div>
    )
}