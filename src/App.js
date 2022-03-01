import Signup from './scenes/Signup';
import Login from './scenes/Login';
import UserList from './scenes/UserList';
import { useState } from 'react'; 
function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();
  return (
    <section>
      {!token
          ? isUser
              ? <Login setToken={setToken} setIsUser={setIsUser} />
              : <Signup setToken={setToken} setIsUser={setIsUser} />
          : <UserList token={token} />
      }
    </section>
  );
}

export default App;