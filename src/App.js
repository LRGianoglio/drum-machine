import { useSelector } from "react-redux";

function App() {
  const volume = useSelector(state => state.volume)
  return (
    <div className="App">
      <p>Holi :)</p>
      <p>Volume {volume}</p>
    </div>
  );
}

export default App;
