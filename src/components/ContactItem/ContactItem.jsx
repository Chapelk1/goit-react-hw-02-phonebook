import PropTypes from 'prop-types'
import {
  ItemLi,
  Name,
  Number,
  Btn,
} from 'components/ContactItem/ContactItem.styled';



export const Item = (props) => {
    const {name, id, number} = props.contact
    return (
      <ItemLi>
        <Name>{name}</Name>
        <Number>{number}</Number>

        <Btn
          type="button"
          onClick={() => {
            props.onDelete(id);
          }}
        >
          Delete
        </Btn>
      </ItemLi>
    );
}

Item.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
}