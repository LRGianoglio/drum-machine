import style from './Button.module.css'

function Button({title, key, sound}) {
    const audio = new Audio(sound)
    const handleClick = () => {
        audio.play();
    }

    return (
        <button onClick={()=>handleClick()} className={style.button}>
            <p className={style.key}>{key}</p>
            <p className={style.title}>{title}</p>
        </button>
    );
}

export default Button;