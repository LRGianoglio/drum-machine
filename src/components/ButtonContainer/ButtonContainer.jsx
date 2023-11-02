import {Button} from '../index'
import buttonData from '../../utils/buttonData'
import style from './ButtonContainer.module.css'

function ButtonContainer({buttons = buttonData}) {
    return (
        <div className={style.buttonContainer}>
            {buttons?.map(button => {
                return <Button title={button.name} sound={button.sound} bkey={button.key} key={button.name}/>
            })}
        </div>
    );
}

export default ButtonContainer;