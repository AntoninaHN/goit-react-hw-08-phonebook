import PropTypes from "prop-types";

import styles from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
  const contactsList = contacts.map(contact => (
      <li className={styles.item} key={contact.id}>
        <p className={styles.text}>{contact.name}: {contact.number}</p>
        <button className={styles.button} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    ));
  return <ul className={styles.list}>{contactsList}</ul>;
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes,
        id: PropTypes,
        number: PropTypes,
    }
    )).isRequired,
    onDelete: PropTypes.func.isRequired,
}
