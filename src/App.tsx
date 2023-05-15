import { ChatMessageUsers } from './components/ChatMessageUsers/ChatMessageUsers';
import { ListUsers } from './components/ListUsers/ListUsers';
import { HeaderApp } from './components/headerApp/HeaderApp'
import style from './App.module.css'


function App() {

  return (
    <div className={style.general}>
      <HeaderApp/>
      <div className={style.grid}>
      <ListUsers/>
      <ChatMessageUsers/>
      </div>
    </div>
  )
}

export default App;
