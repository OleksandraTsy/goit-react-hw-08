import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export default function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id}><Contact contact={contact} /></li>
            ))}
        </ul>
    );
}