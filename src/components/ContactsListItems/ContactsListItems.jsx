import propTypes from 'prop-types';
import styles from './ContactsListItems.module.css'

export const ContactsListItems = ({ name, number, contactID, deleteContact }) => {
    
    return (
        <li key={contactID} className={styles.item}>
        {name} <span>{number}</span>
        <button onClick={() => deleteContact(contactID)} type='button'className={styles.button}>delete</button>
    </li>
    );
}
;

ContactsListItems.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    onDelete: propTypes.func.isRequired,
  };