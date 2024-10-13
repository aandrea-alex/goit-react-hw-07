import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { selectNameFilter } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts =
  nameFilter?.length === 0
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(nameFilter.trim().toLowerCase())
        );

  if (contacts.length === 0) return;
  return (
    <ul className={styles.contact}>
      {filteredContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
