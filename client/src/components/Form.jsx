import React from 'react'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const createTodo = async (text) => {
    const res = await fetch('http://localhost:8000/todo/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: text})
    });
    return res.json();
}

const Form = () => {
    const [text, setText] = useState('');
    const queryClient = useQueryClient();

    const todoMutation = useMutation({
        mutationFn: createTodo,
        onSuccess: (data) => {
            console.log('Todo created:', data);
            queryClient.invalidateQueries({ queryKey: ['todo'] });
        },
        onError: (error) => {
            console.error('Error creating todo:', error);
        }
    });

  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} value = {text} type='text'/>
        <button onClick={()=>todoMutation.mutate(text)}>Create</button>
    </div>
  )
}

export default Form