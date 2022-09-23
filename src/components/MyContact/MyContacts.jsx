import Phonebook from "../../components/PhonebookForm/PhonebookForm";
import PhonebookList from "../../components/PhonebookList/PhonebookList";
import Filter from "../../components/Filter/Filter";
import styles from "./MyContacts.module.css"


const MyContacts = () => {
    return (
        <div className={styles.wrapContacts}>
            <Phonebook />
            <Filter />
            <PhonebookList />
        </div>
    )
};

export default MyContacts;