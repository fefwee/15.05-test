import { ChatMessageUsers } from './components/ChatMessageUsers/ChatMessageUsers';
import { ListUsers } from './components/ListUsers/ListUsers';
import { HeaderApp } from './components/headerApp/HeaderApp'


function App() {
  return (
    <div>
      <HeaderApp/>
      <div style = {{display:'flex'}}>
      <ListUsers/>
      <ChatMessageUsers/>
      </div>
      
      
      
    </div>
  )
}

export default App;
