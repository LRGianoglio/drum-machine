import style from './Switches.module.css'
import {FiPower} from 'react-icons/fi'

function Switches() {
    return (
        <div className={style.switchesContainer}>
            <div className={style.switchContainer}>
                <button className={style.powerButton}>
                    <p className={style.label}>Power</p>
                    <FiPower className={style.powerIcon}/>
                </button>
            </div>
        </div>
    );
}

export default Switches;