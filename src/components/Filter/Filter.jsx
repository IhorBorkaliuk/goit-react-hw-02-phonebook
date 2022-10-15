import PropTypes from 'prop-types';
import { LabelFilter, InputFilter, Wrapper } from './FilterStyled';


export const Filter = ({ handleChange, value }) => {
  return (
    <Wrapper>
      <LabelFilter>
        Find contacts by name
        <InputFilter type="text" value={value} onChange={handleChange} />
      </LabelFilter>
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
