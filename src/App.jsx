import { useSelector } from "react-redux";
import {ButtonContainer} from "./components"
import style from "./App.module.css"

function App() {
  return (
    <div className={style.appContainer}>
      <ButtonContainer />
    </div>
  );
}

export default App;
