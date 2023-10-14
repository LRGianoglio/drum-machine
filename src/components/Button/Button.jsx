import style from './Button.module.css'

function Button({title, sound}) {
    const handleClick = () => {
        console.log(`Boton ${title} presionado`)
    }

    return (
        <button onClick={()=>handleClick()} className={style.button}>
            <p>{title}</p>
        </button>
    );
}

export default Button;