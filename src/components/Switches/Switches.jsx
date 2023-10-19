import style from './Switches.module.css'

function Switches() {
    return (
        <div className={style.switchesContainer}>
            <div className={style.switchContainer}>
                <p className={style.label}>Power</p>
                <input type="checkbox" className={style.input}/>
            </div>
            <div className={style.switchContainer}>
                <p className={style.label}>Bank</p>
                <input type="checkbox" />
            </div>
        </div>
    );
}

export default Switches;