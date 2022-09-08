import React from "react";
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
    return (
    <FilterLabel>
        Find contacts by name <FilterInput type='text' name="filter" id="filter" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>)
};

export default Filter;


// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }