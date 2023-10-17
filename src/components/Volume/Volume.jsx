import style from './Volume.module.css'

function Volume() {
    return (
        <div className={style.volumeContainer}>
            <p className={style.volume}>Volume:</p>
            <input type="range" className={style.range}/>
        </div>
    );
}

export default Volume;