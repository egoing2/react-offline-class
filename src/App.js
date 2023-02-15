import {useState} from 'react';
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  const up = () => setCount(oldCount=>oldCount+1);
  const down = () => setCount(oldCount=>oldCount-1);
  return <>
    <h1>{title}</h1>
    <button onClick={up}>+</button>
    <button onClick={down}>-</button>
    👉
    {count}
  </>
}
function App() {
  return (
    <div>
      <Counter title="참여자 카운터" initValue={10}></Counter>
      <Counter title="불면증 카운터" initValue={0}></Counter>
    </div>
  );
}

export default App;
