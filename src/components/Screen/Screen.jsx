import { useSelector } from 'react-redux';
import style from './Screen.module.css'

function Screen() {
  const power = useSelector(state => state.power)
  const message = useSelector(state => state.lastPlayed)

  return (
    <div className={style.screenContainer}>
      <p className={style.yo}>Luciano Gianoglio</p>
      <p className={power ? style.screen : style.screenOff}>{power ? message : "- - -"}</p>
    </div>
  );
}

export default Screen;