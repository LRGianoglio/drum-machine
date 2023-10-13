import style from './Button.module.css'

function Button({title, sound}) {
    const handleClick = () => {
        console.log(`Boton ${title} presionado`)
    }

    return (
        <button onClick={handleClick()}>
            <p>
                {title}
            </p>
        </button>
    );
}

export default Button;