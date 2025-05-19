
import './App.css';
import { useQuery}  from '@tanstack/react-query';
import Form from './components/Form';


function App() {
  const {data} = useQuery({
  queryKey: ['todo'],
  queryFn: async () => await (await fetch('http://localhost:8000/todo')).json()
});

  console.log(data);
  return (
    <div className="App">
     <Form/>
     {
      data && data.data && data.data.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1> 
        </div>
      ))
     }
    </div>
  );
}

export default App;
