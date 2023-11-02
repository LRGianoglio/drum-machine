import { useDispatch, useSelector } from 'react-redux';
import style from './Volume.module.css'
import { changeVolume } from '../../redux/actions';

function Volume() {
    const dispatch = useDispatch();

    const volume = useSelector(state => state.volume)
    const power = useSelector(state => state.power)

    const handleVolumeChange = (event) => {
        const newVolume = parseInt(event.target.value, 10)
        dispatch(changeVolume(newVolume));
    }

    return (
        <div className={style.volumeContainer}>
            <p className={style.volume}>Volume:</p>
            <input 
                type="range" 
                className={style.range}
                min={0}
                max={100}
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
}

export default Volume;