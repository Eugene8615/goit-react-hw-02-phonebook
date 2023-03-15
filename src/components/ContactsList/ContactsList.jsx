import PropTypes from 'prop-types';
import { ContactsListItems } from 'components/ContactsListItems/ContactsListItems';

function ContactsList({ list, search, deleteContact }) {
    const filteredContact = list.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ol>
            {filteredContact.map(({ name, number, contactID }) => {
                return (
                    <ContactsListItems
                    key={contactID}
                    name={name}
                    number={number}
                    contactID={contactID}
                    deleteContact={deleteContact}
                    />
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