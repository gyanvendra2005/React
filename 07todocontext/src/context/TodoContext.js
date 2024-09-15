import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


 export const TodoContext = createContext({
     Todos: [
               {
                id: 2,
                todo: "hi",
                completed: false,
               }
               
            ],
            addTodo: (todo) => {},
            updateTodo: (id, todo) => {},
            deleteTodo: (id) => {},
            toggleComplete: (id) => {} 
    
})
 

 export default function useTodo() {
    return useContext(TodoContext)
 }

 export  const TodoProvider = TodoContext.Provider