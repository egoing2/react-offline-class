function Counter({title, initValue}){
  return <>
    <h1>{title}</h1>
    <button>+</button> 👉 {initValue}
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
