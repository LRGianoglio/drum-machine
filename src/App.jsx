import {ButtonContainer, Screen, Switches, Volume} from "./components"
import style from "./App.module.css"

function App() {
  return (
    <div className={style.appContainer}>
      <ButtonContainer />
      <Switches />
      <Screen />
      <Volume />
    </div>
  );
}

export default App;
