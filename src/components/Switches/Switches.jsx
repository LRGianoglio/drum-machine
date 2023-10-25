import style from './Switches.module.css'
import {FiPower} from 'react-icons/fi'
import { Switch } from '@mui/material';

function Switches() {
    return (
        <div className={style.switchesContainer}>
            <div className={style.switchContainer}>
                <button className={style.powerButton}>
                    <p className={style.label}>Power</p>
                    <FiPower className={style.powerIcon}/>
                </button>
            </div>
            <div className={style.switchContainer}>
                <p className={style.label}>Bank</p>
                <Switch color='default' className={style.bankSwitch} />
            </div>
        </div>
    );
}

export default Switches;