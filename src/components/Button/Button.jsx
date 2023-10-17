import style from './Button.module.css'

function Button({title, key = "Ñ", sound}) {
    const handleClick = () => {
        console.log(`Boton ${title} presionado`)
    }

    return (
        <button onClick={()=>handleClick()} className={style.button}>
            <p className={style.key}>{key}</p>
            <p className={style.title}>{title}</p>
        </button>
    );
}

export default Button;