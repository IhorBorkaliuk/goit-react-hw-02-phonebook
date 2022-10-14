import PropTypes from 'prop-types';
<<<<<<< HEAD
import { Label, InputFilter } from 'components/Form/FormStyled';
=======
import { Label, InputFilter  } from 'components/Form/FormStyled';
>>>>>>> 208b35d538c69678c0ef148a2444ea1d656cf742

export const Filter = ({ handleChange, value }) => {
  return (
    <Label>
      Find contacts by name
      <InputFilter type="text" value={value} onChange={handleChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
