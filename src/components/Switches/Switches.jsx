import { useDispatch, useSelector } from 'react-redux';
import style from './Switches.module.css'
import {FiPower} from 'react-icons/fi'
import { switchPower } from '../../redux/actions';

function Switches() {
    const power = useSelector(state => state.power)

    const dispatch = useDispatch();

    const handlePower = () =>{
        dispatch(switchPower());
    }

    return (
        <div className={style.switchesContainer}>
            <div className={style.switchContainer}>
                <button className={style.powerButton} onClick={handlePower}>
                    <p className={style.label}>Power</p>
                    <FiPower className={power ? style.powerIcon : style.powerIconOff}/>
                </button>
            </div>
        </div>
    );
}

export default Switches;