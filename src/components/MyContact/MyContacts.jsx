import Phonebook from "../../components/PhonebookForm/PhonebookForm";
import PhonebookList from "../../components/PhonebookList/PhonebookList";
import Filter from "../../components/Filter/Filter";


const MyContacts = () => {
    return (
        <div>
            <Phonebook />
            <Filter />
            <PhonebookList />
        </div>
    )
};

export default MyContacts;