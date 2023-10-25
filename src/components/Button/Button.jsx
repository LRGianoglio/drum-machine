import style from './Button.module.css'

function Button({title, key = "Ñ", sound}) {
    const audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
    const handleClick = () => {
        console.log(`Boton ${title} presionado`)
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