import PropTypes from 'prop-types';
import styles from './ContactsList.module.css'

function ContactsList({ list, search, deleteContact }) {
    const filteredContact = list.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ol>
            {filteredContact.map(({ name, number, contactID }) => {
                return (
                    <li key={contactID} className={styles.item}>
                        {name} <span>{number}</span>
                        <button onClick={() => deleteContact(contactID)} type='button' className={styles.button}>delete</button>
                    </li>

                );
            })}
        </ol>
    );
}

ContactsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            contactID: PropTypes.string.isRequired,
        })
    ).isRequired,
    search: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;