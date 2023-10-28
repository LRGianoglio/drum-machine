import {Button} from '../index'
import buttonData from '../../utils/buttonData'
import style from './ButtonContainer.module.css'

function ButtonContainer({buttons = buttonData}) {
    return (
        <div className={style.buttonContainer}>
            {buttons?.map(button => {
                console.log(button)
                return <Button title={button.name} sound={button.sound} bkey={button.key}/>
            })}
        </div>
    );
}

export default ButtonContainer;