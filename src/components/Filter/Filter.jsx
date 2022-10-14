import PropTypes from 'prop-types';

export const Filter = ({ handleChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
