import PropTypes from 'prop-types';
import {ItemInfo, Button} from '../ContactItem/ContactItem.styles'

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <ItemInfo>{name}</ItemInfo>
      <ItemInfo>{number}</ItemInfo>
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};