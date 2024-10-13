
import TitleSection from './TitleSection/TitleSection';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { SEARCH_LABEL, TITLE } from '../js/constants';
import SearchBox from './SearchBox/SearchBox';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm />
      <SearchBox >
        {SEARCH_LABEL}
      </SearchBox>
      <ContactList  />
    </div>
  );
}

export default App;
