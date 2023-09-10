import { List } from 'components/ContactList/ContactList.styled'
import {Item} from 'components/ContactItem/ContactItem'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {
            contacts.map(contact => {
            return (
              <Item
                key={contact.id}
                contact={contact}
                onDelete={onDeleteContact}
              />
            );
            })
            }
        </List>
    )
}






