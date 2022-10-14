import PropTypes from 'prop-types';
import { Label, InputFilter  } from 'components/Form/FormStyled';

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
