import PropTypes from 'prop-types';
import styles from './Filter.module.css' 

function Filter({ onChange }) {
    return <label className={styles.label}>
        <span className={styles.span}>Find contact by name</span>
        <input onChange={onChange} name="filter" type="text" className={styles.input}/>
    </label>
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;