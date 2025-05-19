
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
    </div>
  );
}

export default App;
