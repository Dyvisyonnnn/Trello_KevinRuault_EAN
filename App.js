import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserRouter } from './router/userRouter';
import { TodoContext } from './context';
import { TodoRouter } from './router/todoRouter';
import { styles } from './styles';

export default function App() {
  const [user, setuser] = useState(null);
  const [tasks, setTasks] = useState([]);
  return (
      <TodoContext.Provider value={{ user, setuser, tasks, setTasks }}>
        <NavigationContainer>
          {(user) ? <TodoRouter></TodoRouter> : <UserRouter></UserRouter>}
        </NavigationContainer>
      </TodoContext.Provider>
  );
}

