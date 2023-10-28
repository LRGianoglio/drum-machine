import style from './Button.module.css'
import { useEffect } from 'react';

function Button({title, bkey, sound}) {
    const audio = new Audio(sound)

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    const handleClick = () => {
        audio.play();
    }

    const handleKeyPress = (event) => {
        if (event.key === bkey.toLowerCase()) {
          handleClick();
        }
    };

    return (
        <button onClick={()=>handleClick()} className={style.button}>
            <p className={style.key}>{bkey}</p>
            <p className={style.title}>{title}</p>
        </button>
    );
}

export default Button;