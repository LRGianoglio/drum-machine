import { useDispatch, useSelector } from 'react-redux';
import style from './Button.module.css'
import { useEffect } from 'react';
import { buttonPress } from '../../redux/actions';

function Button({title, bkey, sound}) {

    const dispatch = useDispatch();

    const audio = new Audio(sound)
    const power = useSelector(state => state.power)
    const volume = useSelector(state => state.volume)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    useEffect(() => {
      audio.volume = volume/100
    }, [volume])

    const handleClick = () => {
      audio.play();
      dispatch(buttonPress(title))
    }

    const handleKeyPress = (event) => {
        if (event.key === bkey.toLowerCase() && power) {
          handleClick();
        }
    };

    return (
        <button onClick={()=>handleClick()} className={power ? style.button : style.buttonOff}>
            <p className={style.key}>{bkey}</p>
            <p className={style.title}>{title}</p>
        </button>
    );
}

export default Button;