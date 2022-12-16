import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnchange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor=''></label>
            <input type='text' />
        </div>
    )
}

export default Input