import { useSelector } from 'react-redux';
import style from './Screen.module.css'

function Screen() {

  const message = useSelector(state => state.lastPlayed)

  return (
    <div className={style.screenContainer}>
      <p className={style.yo}>Luciano Gianoglio</p>
      <p className={style.screen}>{message}</p>
    </div>
  );
}

export default Screen;