import {ButtonContainer, Switches, Volume} from "./components"
import style from "./App.module.css"

function App() {
  return (
    <div className={style.appContainer}>
      <ButtonContainer />
      <Switches />
      <Volume />
    </div>
  );
}

export default App;
