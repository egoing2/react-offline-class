import {useState} from 'react';
function Counter({title, initValue}){
  const [count, setCount] = useState(initValue);
  const up = () => setCount(oldCount=>oldCount+1);
  const down = () => setCount(oldCount=>oldCount-1);
  const style = {marginRight:'5px'}
  return <>
    <h1>{title}</h1>
    <button onClick={up} style={style}>+</button>
    <button onClick={down} style={style}>-</button>
    <span style={style}>👉</span>
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
